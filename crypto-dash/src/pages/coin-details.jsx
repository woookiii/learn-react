import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";
import CoinChart from "../components/CoinChart";
import Spinner from "../components/Spinner";
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {

    const { id } = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const res = await fetch(`${API_URL}/${id}`);
                if (!res.ok) throw new Error('Failed to fetch data');
                const data = await res.json();
                console.log(data);
                setCoin(data);
            } catch (err) {
                console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchCoin();
    }, [id]);
    

    return ( 
        <div className="coin-details-container">
            <Link to='/'>Back to home</Link>
            <h1 className="coin-details-title">
                { coin ? `${coin.name} (${coin.symbol})` : 'Coin Details' }
            </h1>
            
            {loading && <Spinner/>}
            {error && <div className="error">{error}</div>}

            {!loading && !error && (
                <>
                    <img
                        src={coin.image.large}
                        alt={coin.name}
                        className="coin-details-image"
                    />
                    
                    <p>{coin.description.en.split('. ')[0] + '.'}</p>

                    <div className="coin-details-info">
                        <h3>Rank: # { coin.market_cap_rank }</h3>
                        <h3>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</h3>
                        <h4>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</h4>
                        <h4>24H High: ${coin.market_data.high_24h.usd.toLocaleString().toF}</h4>
                        <h4>24H Low: ${coin.market_data.low_24h.usd.toLocaleString()}</h4>
                        
            </div>
            <CoinChart coinId={coin.id} />

                    
                </>
            )}
        </div>
     );
}
 
export default CoinDetailsPage;