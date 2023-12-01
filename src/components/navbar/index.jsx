import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="#">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/voos">
            <span>Voos</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>Sobre</span>
          </Link>
        </li>
        {/* Adicione mais links conforme necessário */}
      </ul>
    </nav>
  );
};

export default Navbar;