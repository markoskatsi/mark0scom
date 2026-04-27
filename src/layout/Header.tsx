const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  return (
    <header>
      {navItems.map((item) => (
        <div key={item.name}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
    </header>
  );
};
