

function Navbar() {
    return (
        <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button to="/" className="text-white font-semibold text-lg">Home</button>
        <ul className="flex space-x-4">
          <li>
            <button to="/about" className="text-white hover:text-gray-300">About</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Contact</button>
          </li>
        </ul>
      </div>
    </nav>

        </>
    )
}

export default Navbar

