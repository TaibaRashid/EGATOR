import React from 'react'
import '../Styles/Aside.css'



const Aside = () => {
  return (
    <>
    <main>
    <aside className='aside2'>
    <button id='close-btn'>
    <span className="material-icons-sharp">close</span>
    </button>
    <div className='side-bar'>
        <a href='/' className='active'>
    <span className="material-icons-sharp">dashboard</span>
    <h4>Dashboard</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">currency_exchange</span>
    <h4>Exchange</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">account_balance_wallet</span>
    <h4>Wallet</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">payments</span>
    <h4>Transactions</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">pie_chart</span>
    <h4>Analytics</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">message</span>
    <h4>Messages</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">help_center</span>
    <h4>Help Center</h4>
    </a>

    <a href='/'>
    <span className="material-icons-sharp">settings</span>
    <h4>Settings</h4>
    </a>
    </div>
    
    <div className='updates'>
    <span className="material-icons-sharp">update</span>
    <h4>Updates Available</h4>
    <p>Security Updates</p>
    <p>General Updates</p>
    <a href='/'>Update Now</a>
    </div>
    </aside>
    </main>
    </>
  )
}

export default Aside