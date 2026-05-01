import React, { forwardRef, useState, useRef, useCallback, useId } from 'react';
import styles from './FileUpload.module.css';

/** A file object tracked by the upload component. */
export interface UploadedFile {
  /** Unique identifier. */
  id: string;
  /** File name. */
  name: string;
  /** File size in bytes. */
  size: number;
  /** MIME type. */
  type: string;
  /** The underlying File object. */
  file: File;
}

/** FileUpload variant options. */
export type FileUploadVariant = 'dropzone' | 'button' | 'compact';

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'> {
  /** Accepted file types (e.g. ".pdf,.jpg" or "image/*"). */
  accept?: string;
  /** Whether multiple files can be uploaded. @default true */
  multiple?: boolean;
  /** Maximum file size in bytes. */
  maxSize?: number;
  /** Maximum number of files allowed. */
  maxFiles?: number;
  /** Callback when files are added. */
  onUpload?: (files: UploadedFile[]) => void;
  /** Callback when a file is removed. */
  onRemove?: (fileId: string) => void;
  /** Currently uploaded files. */
  files?: UploadedFile[];
  /** Visual variant. @default 'dropzone' */
  variant?: FileUploadVariant;
  /** Whether the component is disabled. */
  disabled?: boolean;
  /** Label text. */
  label?: string;
  /** Helper text. */
  helperText?: string;
  /** Error message. */
  error?: string;
}

/**
 * UBS Design System FileUpload component.
 *
 * A file upload interface supporting drag-and-drop, file browser, and
 * compact button modes. Displays uploaded files with remove option and
 * validates file type, size, and count constraints.
 *
 * @example
 * ```tsx
 * <FileUpload
 *   label="Upload documents"
 *   accept=".pdf,.docx"
 *   multiple
 *   maxSize={5 * 1024 * 1024}
 *   maxFiles={5}
 *   files={uploadedFiles}
 *   onUpload={handleUpload}
 *   onRemove={handleRemove}
 *   variant="dropzone"
 * />
 * ```
 */
export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept,
      multiple = true,
      maxSize,
      maxFiles,
      onUpload,
      onRemove,
      files = [],
      variant = 'dropzone',
      disabled = false,
      label,
      helperText,
      error,
      className,
      ...rest
    },
    ref
  ) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const autoId = useId();
    const inputId = `ubs-fileupload-${autoId}`;

    const formatSize = (bytes: number): string => {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const processFiles = useCallback(
      (fileList: FileList | null) => {
        if (!fileList || disabled) return;

        const newFiles: UploadedFile[] = [];
        const existingCount = files.length;
        const limit = maxFiles ? maxFiles - existingCount : Infinity;

        for (let i = 0; i < Math.min(fileList.length, limit); i++) {
          const file = fileList[i];
          if (maxSize && file.size > maxSize) continue;

          newFiles.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            name: file.name,
            size: file.size,
            type: file.type,
            file,
          });
        }

        if (newFiles.length > 0) {
          onUpload?.(newFiles);
        }
      },
      [disabled, files.length, maxFiles, maxSize, onUpload]
    );

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      processFiles(e.dataTransfer.files);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      processFiles(e.target.files);
      if (inputRef.current) inputRef.current.value = '';
    };

    const handleBrowseClick = () => {
      if (!disabled) inputRef.current?.click();
    };

    const containerClassNames = [
      styles.container,
      disabled ? styles.disabled : '',
      error ? styles.error : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    const renderDropzone = () => (
      <div
        className={[
          styles.dropzone,
          dragActive ? styles.dropzoneActive : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Upload files by clicking or dragging"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBrowseClick();
          }
        }}
      >
        <svg
          className={styles.uploadIcon}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 4L16 22M16 4L10 10M16 4L22 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 20V26C6 27.1046 6.89543 28 8 28H24C25.1046 28 26 27.1046 26 26V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.dropzoneText}>
          <strong>Click to upload</strong> or drag and drop
        </span>
        {(accept || maxSize) && (
          <span className={styles.dropzoneHint}>
            {accept && `Accepted: ${accept}`}
            {accept && maxSize && ' · '}
            {maxSize && `Max size: ${formatSize(maxSize)}`}
          </span>
        )}
      </div>
    );

    const renderButton = () => (
      <button
        type="button"
        className={styles.browseButton}
        onClick={handleBrowseClick}
        disabled={disabled}
        aria-disabled={disabled}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 2L8 12M8 2L5 5M8 2L11 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 10V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Upload files
      </button>
    );

    const renderCompact = () => (
      <div className={styles.compact}>
        <button
          type="button"
          className={styles.compactButton}
          onClick={handleBrowseClick}
          disabled={disabled}
          aria-disabled={disabled}
        >
          Browse...
        </button>
        <span className={styles.compactText}>
          {files.length > 0
            ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
            : 'No file selected'}
        </span>
      </div>
    );

    return (
      <div ref={ref} className={containerClassNames} {...rest}>
        {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          className={styles.hiddenInput}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          tabIndex={-1}
          aria-hidden="true"
        />
        {variant === 'dropzone' && renderDropzone()}
        {variant === 'button' && renderButton()}
        {variant === 'compact' && renderCompact()}
        {files.length > 0 && (
          <ul className={styles.fileList} aria-label="Uploaded files">
            {files.map((file) => (
              <li key={file.id} className={styles.fileItem}>
                <svg
                  className={styles.fileIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 2H9L12 5V14H4V2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M9 2V5H12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span className={styles.fileName}>{file.name}</span>
                <span className={styles.fileSize}>{formatSize(file.size)}</span>
                <button
                  type="button"
                  className={styles.fileRemove}
                  aria-label={`Remove ${file.name}`}
                  onClick={() => onRemove?.(file.id)}
                  disabled={disabled}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
        {error && <span className={styles.errorText} role="alert">{error}</span>}
        {helperText && !error && <span className={styles.helperText}>{helperText}</span>}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
