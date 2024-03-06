

function AboutBitcoin() {
    return (
        <>
    <div className="container mx-auto mt-10 pl-2 pr-2">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
       <h1 className="text-lg font-semibold mb-4">About Bitcoin</h1>
        <h3 className="text-md font-semibold mb-4">What is Bitcoin?</h3>
        <div>
          <p className="text-justify">
          Bitcoin is a revolutionary digital currency that has transformed the landscape of finance and technology since its inception in 2009. Created by an anonymous entity known as Satoshi Nakamoto, Bitcoin operates on a decentralized network without the need for intermediaries such as banks or governments. At its core, Bitcoin is built on blockchain technology, a distributed ledger system that records all transactions transparently and securely across a network of computers.

One of the key features of Bitcoin is its decentralized nature. Unlike traditional fiat currencies, which are controlled by central banks and governments, Bitcoin is not issued or regulated by any single authority. Instead, it relies on a network of nodes, or computers, to validate and record transactions. This decentralized approach ensures that no single entity has control over the Bitcoin network, making it resistant to censorship and manipulation.

Transactions on the Bitcoin network are peer-to-peer, meaning that they occur directly between users without the need for intermediaries. When a user wants to send Bitcoin to another user, they broadcast a transaction to the network, which is then verified by miners. Miners are individuals or groups of individuals who use powerful computers to solve complex mathematical puzzles, thereby confirming transactions and adding them to the blockchain. In return for their efforts, miners are rewarded with newly minted Bitcoins and transaction fees.

Bitcoin transactions are pseudonymous, meaning that while the details of each transaction are recorded on the blockchain, the identities of the parties involved remain anonymous. Each user is represented by a unique alphanumeric address, which serves as their digital signature. While this provides a certain level of privacy, it also presents challenges in terms of traceability and accountability, particularly in the context of illicit activities such as money laundering and terrorism financing.

The supply of Bitcoin is capped at 21 million coins, a limit that is hardcoded into its protocol. This scarcity is one of the key drivers of Bitcoin's value, as it creates a deflationary economic model where demand outstrips supply. Unlike fiat currencies, which can be printed indefinitely by central banks, Bitcoin's fixed supply ensures that it cannot be devalued through inflationary measures.

Bitcoin's value is determined by market forces such as supply and demand, speculation, and investor sentiment. Its price can be highly volatile, with dramatic fluctuations occurring over short periods. While this volatility presents opportunities for profit, it also poses risks for investors and users alike.

Despite its challenges, Bitcoin has gained widespread acceptance and adoption since its inception. It has become increasingly recognized as a legitimate asset class, with institutional investors and corporations adding it to their investment portfolios. Additionally, Bitcoin has gained traction as a means of payment, with an increasing number of merchants and businesses accepting it as a form of currency.

In conclusion, Bitcoin represents a paradigm shift in the world of finance. Its decentralized nature, scarcity, and technological innovation have positioned it as a viable alternative to traditional fiat currencies. While its journey has been marked by challenges and controversies, Bitcoin continues to push the boundaries of what is possible in the digital age, paving the way for a more decentralized and inclusive financial system.
          </p>
        </div>
        <div className="container mx-auto mt-10 pl-2 pr-2 flex justify-center">
      {/* First container */}
      <div className="w-1/2 pr-4">
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h4knHljU5WbnJVch5B1cVm9IUoVnGfh6Tp7kmVerIBdsiIO5k8IXGRp5k3woYMMZvuE&usqp=CAU" />
          <h1 className="text-lg font-bold text-dark mt-4">Calculate the Profit</h1>
          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculate</button>
          </div>
        </div>
      </div>

      {/* Second container */}
      <div className="w-1/2 pl-4">
        <div className="bg-orange-200 p-6 rounded-lg shadow-lg">
          <img src="data:image/jpeg;base64,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" alt="Image" className="w-full" />
          <h1 className="text-lg font-bold text-dark mt-4">Calculate the Tax</h1>
          <div className="mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculate</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
        </>
    )
}

export default AboutBitcoin