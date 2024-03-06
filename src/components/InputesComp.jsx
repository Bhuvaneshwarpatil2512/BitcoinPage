

function InputesComp() {
    return (
    <>
     <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center">
      <ul className="flex flex-wrap space-x-4 justify-center gap-4">
          <li>
            <button to="/Overview" className="text-white hover:text-gray-300">Overview</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Fundamentals</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">News Insights</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Setiments</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Team</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Techicals</button>
          </li>
          <li>
            <button to="/contact" className="text-white hover:text-gray-300">Tokenomics</button>
          </li>
        </ul>
      </div>
    </nav>
    </>
    )
}

export default InputesComp

