import type { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64Z"
      />
      <path
        fill="#fff"
        d="M99.922 41.34H87.33l-34.11 45.48V41.34H40.628v65.32h12.592l34.11-45.48v45.48h12.592V41.34Z"
      />
    </svg>
  );
}

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      <path fill="#1976d2" d="M24,4A20,20,0,1,1,4,24,20,20,0,0,1,24,4Z" />
      <path
        fill="#fff"
        d="M26.4,27.1h-4.8v-4.8h4.8v-2.3h-4.8v-2.3h-2.3v9.4h7.1v-2.3h-2.3v-2.3l2.3-2.3Z"
      />
      <path
        fill="#fff"
        d="M13,13h9.4v2.3H15.3v4.8h7.1v2.3H15.3v4.8h7.1V29H13Z"
      />
    </svg>
  );
}

export function NodejsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.75 22.5c-.966 0-1.75-.783-1.75-1.75V3.25c0-.967.784-1.75 1.75-1.75s1.75.783 1.75 1.75v17.5c0 .967-.784 1.75-1.75 1.75Zm-5-4.75c-.967 0-1.75-.783-1.75-1.75v-10c0-.967.783-1.75 1.75-1.75s1.75.783 1.75 1.75v10c0 .967-.783 1.75-1.75 1.75Zm10 0c-.967 0-1.75-.783-1.75-1.75v-10c0-.967.783-1.75 1.75-1.75s1.75.783 1.75 1.75v10c0 .967-.783 1.75-1.75 1.75Z"
      />
    </svg>
  );
}

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M16.5 10.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"/>
            <path d="M7.5 4.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"/>
        </svg>
    )
}

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/>
            <path d="M12 15a3 3 0 1 0 0-6"/>
            <path d="M15 12a3 3 0 1 0-6 0"/>
            <path d="M12 9a3 3 0 1 0 0 6"/>
            <path d="M9 12a3 3 0 1 0 6 0"/>
        </svg>
    )
}
