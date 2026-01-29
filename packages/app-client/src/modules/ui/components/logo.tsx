import type { Component, JSX } from 'solid-js';

export const Logo: Component<{ class?: string } & JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 40"
      class={props.class}
      fill="currentColor"
      {...props}
    >
      {/* 3D House base */}
      <polygon points="8,35 8,20 22,20 22,35" />
      <polygon points="22,20 22,35 32,30 32,15" />
      {/* Roof */}
      <polygon points="5,20 15,8 25,20" />
      <polygon points="25,20 15,8 35,15 32,15" />
      {/* Chimney */}
      <rect x="8" y="6" width="4" height="8" />
      {/* Front windows */}
      <rect x="10" y="22" width="4" height="4" class="fill-background" />
      <rect x="16" y="22" width="4" height="4" class="fill-background" />
      {/* Door */}
      <rect x="24" y="23" width="4" height="7" class="fill-background" />
      {/* Side window */}
      <rect x="26" y="18" width="3" height="3" class="fill-background" />
      {/* TWN Text */}
      <text x="50" y="30" font-family="Arial Black, sans-serif" font-weight="900" font-size="24">TWN</text>
    </svg>
  );
};
