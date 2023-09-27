import React, { useEffect,useRef } from 'react';
import BTC from '../Images/BTC.png';
import ETH from '../Images/ETH.png';
import '../Styles/Middle.css';
import Chart from 'chart.js/auto';
import visa from '../Images/visa.png'
import cardchip from '../Images/cardchip.png'
import mastercard from '../Images/mastercard.png'



const Middle = () => {
  
        const chartRef = useRef(null);
        useEffect(() => {
            try {
              const chartCanvas = chartRef.current;
              if (chartCanvas.chart) {
                chartCanvas.chart.destroy();
              }
        const ctx = chartCanvas.getContext('2d');
        const newChart =new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'
            ],
            datasets: [
              {
                label: 'BTC',
                data: [23456, 65432, 45678, 61009, 19876, 76545, 48765, 98432, 39876, 45098, 76345],
                borderColor: 'red',
                borderWidth: 2
              },
              {
                label: 'ETH',
                data: [23456, 65432, 39876, 45098, 45678, 76545, 48765, 61009, 19876, 98432, 76345],
                borderColor: 'blue',
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true
          }
        });
        chartCanvas.chart = newChart;
    } catch (error) {
      console.error('Chart initialization error:', error);
    }
  }, []);

  return (
      <>
                  <div className='main'>
                <div className='middle'>
                    <div className='header'>
                        <h1>Overview</h1>
                        <input type='date' />
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <div className='top'>
                                <div className='left'>
                                    <img src={BTC} alt='BTC' crossOrigin="anonymous"></img>
                                    <h2>BTC</h2>
                                </div>
                                <img src={visa} alt='visa' crossOrigin="anonymous"></img>
                            </div>

                            <div className='middle'>
                                <h1>$827,199</h1>
                                <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
                            </div>
                            <div className='bottom'>

                                <div className='left'>
                                    <small>Card Holder</small>
                                    <h5>John Doe</h5>
                                </div>

                                <div className='right'>
                                    <div className='expiry'>
                                        <small>Expiry</small>
                                        <h5>8/23</h5>
                                    </div>

                                    <div className='cvv'>
                                        <small>CVV</small>
                                        <h5>123</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { /* End of Card1 */}

                        <div className='card'>
                            <div className='top'>
                                <div className='left'>
                                    <img src={ETH} alt='ETH' crossOrigin="anonymous"></img>
                                    <h2>ETH</h2>
                                </div>
                                <img src={mastercard} alt='visa' crossOrigin="anonymous"></img>
                            </div>

                            <div className='middle'>
                                <h1>$95,623</h1>
                                <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
                            </div>
                            <div className='bottom'>

                                <div className='left'>
                                    <small>Card Holder</small>
                                    <h5>John Doe</h5>
                                </div>

                                <div className='right'>
                                    <div className='expiry'>
                                        <small>Expiry</small>
                                        <h5>8/23</h5>
                                    </div>

                                    <div className='cvv'>
                                        <small>CVV</small>
                                        <h5>123</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Card2 */}

                        <div className='card'>
                            <div className='top'>
                                <div className='left'>
                                    <img src={BTC} alt='BTC' crossOrigin="anonymous"></img>
                                    <h2>BTC</h2>
                                </div>
                                <img src={visa} alt='visa' crossOrigin="anonymous"></img>
                            </div>

                            <div className='middle'>
                                <h1>$74,384</h1>
                                <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
                            </div>
                            <div className='bottom'>

                                <div className='left'>
                                    <small>Card Holder</small>
                                    <h5>John Doe</h5>
                                </div>

                                <div className='right'>
                                    <div className='expiry'>
                                        <small>Expiry</small>
                                        <h5>8/24</h5>
                                    </div>

                                    <div className='cvv'>
                                        <small>CVV</small>
                                        <h5>123</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Card3 */}

                    </div>
                    {/* End of Cards */}
                    <div className='monthly-report'>
                        <div className='report'>
                            <h3>Income</h3>
                            <div><details>
                                <h1>$29,023</h1>
                                <h6 className='success'>+3.5%</h6>
                            </details>
                                <p className='text-muted'>
                                    Compared to $26, 938 last month
                                </p>
                            </div>
                        </div>

                        <div className='report'>
                            <h3>Expenses</h3>
                            <div><details>
                                <h1>$9,005</h1>
                                <h6 className='danger'>-6.5%</h6>
                            </details>
                                <p className='text-muted'>
                                    Compared to $11, 912 last month
                                </p>
                            </div>
                        </div>

                        <div className='report'>
                            <h3>Cashback</h3>
                            <div><details>
                                <h1>$47,004</h1>
                                <h6 className='success'>+7.1%</h6>
                            </details>
                                <p className='text-muted'>
                                    Compared to $3,028 last month
                                </p>
                            </div>
                        </div>

                        <div className='report'>
                            <h3>Turnover</h3>
                            <div><details>
                                <h1>$118,900</h1>
                                <h6 className='danger'>-17.8%</h6>
                            </details>
                                <p className='text-muted'>
                                    Compared to $114,234 last month
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* End of Monthly Report */}

                    <div className='fast-payment'>
                        <h2>Fast Payment</h2>
                        <div className='badges'>
                            <div className='badge'>
                                <span className="material-icons-sharp">add</span>
                            </div>

                            <div className='badge'>
                                <span className='bg-primary'></span>
                                <div>
                                    <h5>Training</h5>
                                    <h4>$50</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-primary'></span>
                                <div>
                                    <h5>Internet</h5>
                                    <h4>$40</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-primary'></span>
                                <div>
                                    <h5>Gas</h5>
                                    <h4>$190</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-primary'></span>
                                <div>
                                    <h5>Movies</h5>
                                    <h4>$35</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-primary'></span>
                                <div>
                                    <h5>Education</h5>
                                    <h4>$999</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-danger'></span>
                                <div>
                                    <h5>Electricity</h5>
                                    <h4>$109</h4>
                                </div>
                            </div>

                            <div className='badge'>
                                <span className='bg-success'></span>
                                <div>
                                    <h5>Food</h5>
                                    <h4>$399</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Of Fast Payment */}
                    <canvas id="chart" ref={chartRef}></canvas>
                    
                </div>
            </div>
      <canvas id="chart"></canvas>
    </>
  );
};

export default Middle;



































// import React from 'react'
// import BTC from '../Images/BTC.png'
// import visa from '../Images/visa.png'
// import cardchip from '../Images/cardchip.png'
// import ETH from '../Images/ETH.png'
// import mastercard from '../Images/mastercard.png'
// import '../Styles/Middle.css'
// import Chart from 'chart.js/auto'







// const Middle = () => {

//     return (
//         <>
//             <div className='main'>
//                 <div className='middle'>
//                     <div className='header'>
//                         <h1>Overview</h1>
//                         <input type='date' />
//                     </div>
//                     <div className='cards'>
//                         <div className='card'>
//                             <div className='top'>
//                                 <div className='left'>
//                                     <img src={BTC} alt='BTC' crossOrigin="anonymous"></img>
//                                     <h2>BTC</h2>
//                                 </div>
//                                 <img src={visa} alt='visa' crossOrigin="anonymous"></img>
//                             </div>

//                             <div className='middle'>
//                                 <h1>$827,199</h1>
//                                 <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
//                             </div>
//                             <div className='bottom'>

//                                 <div className='left'>
//                                     <small>Card Holder</small>
//                                     <h5>John Doe</h5>
//                                 </div>

//                                 <div className='right'>
//                                     <div className='expiry'>
//                                         <small>Expiry</small>
//                                         <h5>8/23</h5>
//                                     </div>

//                                     <div className='cvv'>
//                                         <small>CVV</small>
//                                         <h5>123</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         { /* End of Card1 */}

//                         <div className='card'>
//                             <div className='top'>
//                                 <div className='left'>
//                                     <img src={ETH} alt='ETH' crossOrigin="anonymous"></img>
//                                     <h2>ETH</h2>
//                                 </div>
//                                 <img src={mastercard} alt='visa' crossOrigin="anonymous"></img>
//                             </div>

//                             <div className='middle'>
//                                 <h1>$95,623</h1>
//                                 <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
//                             </div>
//                             <div className='bottom'>

//                                 <div className='left'>
//                                     <small>Card Holder</small>
//                                     <h5>John Doe</h5>
//                                 </div>

//                                 <div className='right'>
//                                     <div className='expiry'>
//                                         <small>Expiry</small>
//                                         <h5>8/23</h5>
//                                     </div>

//                                     <div className='cvv'>
//                                         <small>CVV</small>
//                                         <h5>123</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* End of Card2 */}

//                         <div className='card'>
//                             <div className='top'>
//                                 <div className='left'>
//                                     <img src={BTC} alt='BTC' crossOrigin="anonymous"></img>
//                                     <h2>BTC</h2>
//                                 </div>
//                                 <img src={visa} alt='visa' crossOrigin="anonymous"></img>
//                             </div>

//                             <div className='middle'>
//                                 <h1>$74,384</h1>
//                                 <img src={cardchip} alt='card chip' className='chip' crossOrigin="anonymous"></img>
//                             </div>
//                             <div className='bottom'>

//                                 <div className='left'>
//                                     <small>Card Holder</small>
//                                     <h5>John Doe</h5>
//                                 </div>

//                                 <div className='right'>
//                                     <div className='expiry'>
//                                         <small>Expiry</small>
//                                         <h5>8/24</h5>
//                                     </div>

//                                     <div className='cvv'>
//                                         <small>CVV</small>
//                                         <h5>123</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* End of Card3 */}

//                     </div>
//                     {/* End of Cards */}
//                     <div className='monthly-report'>
//                         <div className='report'>
//                             <h3>Income</h3>
//                             <div><details>
//                                 <h1>$29,023</h1>
//                                 <h6 className='success'>+3.5%</h6>
//                             </details>
//                                 <p className='text-muted'>
//                                     Compared to $26, 938 last month
//                                 </p>
//                             </div>
//                         </div>

//                         <div className='report'>
//                             <h3>Expenses</h3>
//                             <div><details>
//                                 <h1>$9,005</h1>
//                                 <h6 className='danger'>-6.5%</h6>
//                             </details>
//                                 <p className='text-muted'>
//                                     Compared to $11, 912 last month
//                                 </p>
//                             </div>
//                         </div>

//                         <div className='report'>
//                             <h3>Cashback</h3>
//                             <div><details>
//                                 <h1>$47,004</h1>
//                                 <h6 className='success'>+7.1%</h6>
//                             </details>
//                                 <p className='text-muted'>
//                                     Compared to $3,028 last month
//                                 </p>
//                             </div>
//                         </div>

//                         <div className='report'>
//                             <h3>Turnover</h3>
//                             <div><details>
//                                 <h1>$118,900</h1>
//                                 <h6 className='danger'>-17.8%</h6>
//                             </details>
//                                 <p className='text-muted'>
//                                     Compared to $114,234 last month
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* End of Monthly Report */}

//                     <div className='fast-payment'>
//                         <h2>Fast Payment</h2>
//                         <div className='badges'>
//                             <div className='badge'>
//                                 <span className="material-icons-sharp">add</span>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-primary'></span>
//                                 <div>
//                                     <h5>Training</h5>
//                                     <h4>$50</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-primary'></span>
//                                 <div>
//                                     <h5>Internet</h5>
//                                     <h4>$40</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-primary'></span>
//                                 <div>
//                                     <h5>Gas</h5>
//                                     <h4>$190</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-primary'></span>
//                                 <div>
//                                     <h5>Movies</h5>
//                                     <h4>$35</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-primary'></span>
//                                 <div>
//                                     <h5>Education</h5>
//                                     <h4>$999</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-danger'></span>
//                                 <div>
//                                     <h5>Electricity</h5>
//                                     <h4>$109</h4>
//                                 </div>
//                             </div>

//                             <div className='badge'>
//                                 <span className='bg-success'></span>
//                                 <div>
//                                     <h5>Food</h5>
//                                     <h4>$399</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Of Fast Payment */}
//                     <canvas id='chart'></canvas>
                    
//                 </div>
//             </div>

            
             
             
             
//         </>
//     )
// }




// try {
//     const chart = document.querySelector('#chart').getContext('2d');
//     new Chart(chart, {
        
//   type:'line',
//   data: {
//       labels:['Jan', 'Feb', 'Mar','Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
//       datasets: [
//         {
//           label: 'BTC',
//           data: [23456,65432,45678,61009,19876,76545,48765,98432,39876,45098,76345],
//           bordercolor:'red',
//           borderwidth:2
//         },
//         {
//           label: 'ETH',
//           data: [23456,65432,39876,45098,45678,76545,48765,61009,19876,98432,76345],
//           bordercolor:'blue',
//           borderwidth:2
//         }
//       ]
//   },

//   options :{
//     responsive:true
//   }
// })

// } catch (error) {
//     console.error('Chart initialization error:', error);
// }


// export default Middle



