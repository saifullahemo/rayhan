export default function Navigation() {
    return (
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 text-white">
        <div className="text-lg font-semibold">MONTFORT GROUP</div>
        <div className="space-x-8 text-sm opacity-80">
          <a href="#">TRADING</a>
          <a href="#">CAPITAL</a>
          <a href="#">MARITIME</a>
          <a href="#">ENERGY</a>
        </div>
      </nav>
    );
  }
  