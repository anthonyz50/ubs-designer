/**
 * @module Avatar
 * @description Avatar component with image, initials fallback, and status indicator.
 * Follows UBS brand guidelines.
 *
 * Includes `AvatarGroup` for overlapping avatar stacks.
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" size="lg" status="online" />
 * <Avatar name="Jane Smith" size="md" />
 *
 * <AvatarGroup max={3}>
 *   <Avatar name="A B" />
 *   <Avatar name="C D" />
 *   <Avatar name="E F" />
 *   <Avatar name="G H" />
 * </AvatarGroup>
 * ```
 */
import {
  forwardRef,
  useState,
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type ReactElement,
} from 'react';
import styles from './Avatar.module.css';

/** Avatar size. */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Avatar shape variant. */
export type AvatarVariant = 'circle' | 'square';

/** Status indicator. */
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Image source URL. */
  src?: string;
  /** Alt text for the image. */
  alt?: string;
  /** Full name used for initials fallback. */
  name?: string;
  /** Avatar size. Defaults to `'md'`. */
  size?: AvatarSize;
  /** Shape variant. Defaults to `'circle'`. */
  variant?: AvatarVariant;
  /** Status indicator dot. */
  status?: AvatarStatus;
  /** Additional props forwarded to the `<img>` element. */
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}

const STATUS_LABEL: Record<AvatarStatus, string> = {
  online: 'Online',
  offline: 'Offline',
  busy: 'Busy',
  away: 'Away',
};

const STATUS_CLASS: Record<AvatarStatus, string> = {
  online: styles.statusOnline,
  offline: styles.statusOffline,
  busy: styles.statusBusy,
  away: styles.statusAway,
};

/** Extract initials from a full name (max 2 characters). */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Avatar — user image or initials with optional status indicator.
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = 'md',
      variant = 'circle',
      status,
      imgProps,
      className,
      ...rest
    },
    ref,
  ) => {
    const [imgError, setImgError] = useState(false);

    const classes = [styles.avatar, styles[size], styles[variant], className]
      .filter(Boolean)
      .join(' ');

    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : undefined;

    return (
      <span
        ref={ref}
        className={classes}
        role="img"
        aria-label={alt || name || 'Avatar'}
        {...rest}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt || name || ''}
            className={styles.image}
            onError={() => setImgError(true)}
            {...imgProps}
          />
        ) : initials ? (
          <span className={styles.initials} aria-hidden="true">
            {initials}
          </span>
        ) : null}
        {status && (
          <span
            className={`${styles.status} ${STATUS_CLASS[status]}`}
            aria-label={STATUS_LABEL[status]}
          />
        )}
      </span>
    );
  },
);

Avatar.displayName = 'Avatar';

/* ─── Avatar Group ─── */

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to display before showing +N. */
  max?: number;
  /** Size applied to overflow indicator. Defaults to `'md'`. */
  size?: AvatarSize;
  children: ReactElement<AvatarProps>[] | ReactElement<AvatarProps>;
}

/**
 * AvatarGroup — overlapping stack of avatars with an overflow indicator.
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', children, className, ...rest }, ref) => {
    const childArray = Children.toArray(children).filter(isValidElement) as ReactElement<AvatarProps>[];
    const visible = max !== undefined ? childArray.slice(0, max) : childArray;
    const overflow = max !== undefined ? childArray.length - max : 0;

    const classes = [styles.avatarGroup, className].filter(Boolean).join(' ');

    const sizeMap: Record<AvatarSize, number> = { xs: 24, sm: 32, md: 40, lg: 56, xl: 80 };
    const dim = sizeMap[size];

    return (
      <div ref={ref} className={classes} role="group" aria-label="Avatar group" {...rest}>
        {overflow > 0 && (
          <span
            className={`${styles.overflow}`}
            style={{ width: dim, height: dim, fontSize: dim * 0.35 }}
            aria-label={`${overflow} more`}
          >
            +{overflow}
          </span>
        )}
        {visible
          .slice()
          .reverse()
          .map((child, i) => cloneElement(child, { key: i }))}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';

export default Avatar;
