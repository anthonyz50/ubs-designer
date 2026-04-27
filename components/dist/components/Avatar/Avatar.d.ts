import { HTMLAttributes, ImgHTMLAttributes, ReactElement } from 'react';

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
/**
 * Avatar — user image or initials with optional status indicator.
 */
export declare const Avatar: import('react').ForwardRefExoticComponent<AvatarProps & import('react').RefAttributes<HTMLSpanElement>>;
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
export declare const AvatarGroup: import('react').ForwardRefExoticComponent<AvatarGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default Avatar;
