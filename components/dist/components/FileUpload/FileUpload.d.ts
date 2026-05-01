import { default as React } from 'react';

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
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;
