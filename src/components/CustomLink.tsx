import React from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className = "",
  target,
  rel,
}) => {
  // Si el link es externo, abre en nueva pestaña y añade rel seguro
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={target || (isExternal ? "_blank" : undefined)}
      rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
    >
      {children}
    </a>
  );
};

export default CustomLink;