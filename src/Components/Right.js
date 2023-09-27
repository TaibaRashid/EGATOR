import React from 'react'
import uniliver from '../Images/uniliver.png'
import tesla from '../Images/tesla.png'
import mcdonalds from '../Images/mcdonalds.png'
import monster from '../Images/monster.png'
import '../Styles/Right.css'
import visa from '../Images/visa.png'
import mastercard from '../Images/mastercard.png'


const Right = () => {
  return (
    <>
    <div className='right'>
        <div className='investments'>
            <div className='header'>
                <h2>Investments</h2>
                <a href='/'>More<span className="material-icons-sharp">chevron_right</span></a>
            </div>

            <div className='investment'>
                <img src={uniliver} alt='uniliver' crossOrigin="anonymous"></img>
                <h4 >Uniliver</h4>
                <div className='date-time'>
                    <p>7 Nov,2021</p>
                    <small className='text-muted'>09:15pm</small>
                </div>
                <div className='bonds'>
                    <p>1402</p>
                    <small className='text-muted'>Bonds</small>
                </div>
                <div className='amount'>
                    <h4>$20,033</h4>
                    <small className='danger'>-4.27%</small>
                </div>
                </div>

                <div className='investment'>
                <img src={tesla} alt='tesla' crossOrigin="anonymous"></img>
                <h4>Tesla</h4>
                <div className='date-time'>
                    <p>7 Nov,2021</p>
                    <small className='text-muted'>09:15pm</small>
                </div>
                <div className='bonds'>
                    <p>1402</p>
                    <small className='text-muted'>Bonds</small>
                </div>
                <div className='amount'>
                    <h4>$20,033</h4>
                    <small className='success'>36.09%</small>
                </div>
                </div>

                <div className='investment'>
                <img src={monster} alt='monster' crossOrigin="anonymous"></img>
                <h4>Monster</h4>
                <div className='date-time'>
                    <p>7 Nov,2021</p>
                    <small className='text-muted'>09:15pm</small>
                </div>
                <div className='bonds'>
                    <p>1402</p>
                    <small className='text-muted'>Bonds</small>
                </div>
                <div className='amount'>
                    <h4>$20,033</h4>
                    <small className='danger'>6.66%</small>
                </div>
                </div>

                <div className='investment'>
                <img src={mcdonalds} alt='mcdonalds' crossOrigin="anonymous"></img>
                <h4>McDonalds</h4>
                <div className='date-time'>
                    <p>7 Nov,2021</p>
                    <small className='text-muted'>09:15pm</small>
                </div>
                <div className='bonds'>
                    <p>1402</p>
                    <small className='text-muted'>Bonds</small>
                </div>
                <div className='amount'>
                    <h4>$20,033</h4>
                    <small className='danger'>-4.27%</small>
                </div>
                </div>

                


            </div>

{/* End of Investments */}
            <div className='recent-transactions'>
            <div className='header'>
    <h2>Transactions</h2>
    <a href='/'>More<span className="material-icons-sharp">chevron_right</span></a>
</div>


            <div className='transaction'>
                
                <div className='service'>
                    <div className='icon bg-purple-light'>
                    <span className="material-icons-sharp purple">headphones</span>
                    </div>

                    <div className='details'>
                    <h4>Music</h4>
                    <p>20.11.2021</p>
                    </div>
                    </div>
                    <div className='card-details'>
                    <div className='card bg-danger'>
                        <img src={visa} alt='visa' crossOrigin="anonymous"></img>
                    </div>
                    <div className='details'>
                       <p>*2757</p> 
                       <small className='text-muted'>Credit Card</small>
                    </div>
                    </div>
                    <h4>$20</h4>
                
            </div>


            <div className='transaction'>
                <div className='service'>
                    <div className='icon bg-purple-light'>
                    <span className="material-icons-sharp purple">shopping_bag</span>
                    </div>

                    <div className='details'>
                    <h4>Shopping</h4>
                    <p>19.11.2021</p>
                    </div>
                    </div>
                    <div className='card-details'>
                    <div className='card bg-primary'>
                        <img src={visa} alt='visa' crossOrigin="anonymous"></img>
                    </div>
                    <div className='details'>
                       <p>*2757</p> 
                       <small className='text-muted'>Credit Card</small>
                    </div>
                    </div>
                    <h4>$20</h4>
                
            </div>


            <div className='transaction'>
                <div className='service'>
                    <div className='icon bg-success-light'>
                    <span className="material-icons-sharp success">restaurant</span>
                    </div>

                    <div className='details'>
                    <h4>Restuarant</h4>
                    <p>10.11.2021</p>
                    </div>
                    </div>
                    <div className='card-details'>
                    <div className='card bg-dark'>
                        <img src={mastercard} alt='visa'crossOrigin="anonymous"></img>
                    </div>
                    <div className='details'>
                       <p>*8273</p> 
                       <small className='text-muted'>Master Card</small>
                    </div>
                    </div>
                    <h4>$-50</h4>
                
            </div>


            <div className='transaction'>
                <div className='service'>
                    <div className='icon bg-danger-light'>
                    <span className="material-icons-sharp danger">sports_esports</span>
                    </div>

                    <div className='details'>
                    <h4>Games</h4>
                    <p>15.11.2021</p>
                    </div>
                    </div>
                    <div className='card-details'>
                    <div className='card bg-danger'>
                    <img src={visa} alt='visa'crossOrigin="anonymous"></img>
                    </div>
                    <div className='details'>
                       <p>*2757</p> 
                       <small className='text-muted'>Credit Card</small>
                    </div>
                    </div>
                    <h4>$20</h4>
                
            </div>


            <div className='transaction'>
                <div className='service'>
                    <div className='icon bg-danger-light'>
                    <span className="material-icons-sharp danger">medication</span>
                    </div>

                    <div className='details'>
                    <h4>Pharmacy</h4>
                    <p>15.11.2021</p>
                    </div>
                    </div>
                    <div className='card-details'>
                    <div className='card bg-primary'>
                    <img src={visa} alt='visa' crossOrigin="anonymous"></img>
                    </div>
                    <div className='details'>
                       <p>*2757</p> 
                       <small className='text-muted'>Credit Card</small>
                    </div>
                    </div>
                    <h4>$20</h4>
                
            </div>

            </div>
    </div>

    </>
  )
}

export default Right