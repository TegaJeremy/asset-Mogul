import React from 'react'
import './marketnews.css'
import CryptoNews from '../tradingViewWidget/CryptoNews'
import ForexNews from '../tradingViewWidget/ForexNews'
import StockNews from '../tradingViewWidget/StockNews'
import IndexNews from '../tradingViewWidget/IndexNews'

const MarketNews = () => {
  return (
    <>
    
        <div className='market_news_body'>
            <h1>Market News</h1>
            <div className='news_body'>
                <p>Forex News</p>
                <div className='news_container'>
                    <ForexNews/>
                </div>
            </div>
            <div className='news_body'>
                <p>Crypto News</p>
                <div className='news_container'>
                    <CryptoNews/>
                </div>
            </div>
            <div className='news_body'>
                <p>Stock News</p>
                <div className='news_container'>
                    <StockNews/>
                </div>
            </div>
            <div className='news_body'>
                <p>Index News</p>
                <div className='news_container'>
                    <IndexNews/>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default MarketNews
