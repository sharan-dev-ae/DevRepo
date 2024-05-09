
import BottomNav from "../components/bottom-nav/page";
import ListingCard from "../components/card/page";


export default function Home() {

    return (
        <div style={{ position: 'relative' }} >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ padding: '10px' }}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{ width: '100%', height: '400px' }}>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://placehold.jp/3d4070/ffffff/800x150.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="row m-2">
                <div className="col-md-3">
                    <ListingCard />
                </div>
                <div className="col-md-3">
                    <ListingCard />
                </div>
                <div className="col-md-3">
                    <ListingCard />
                </div>
                <div className="col-md-3">
                    <ListingCard />
                </div>
            </div>
            <div className="carousel-item">
                Hel;lo
            </div>
            <BottomNav />
        </div>
    );
}
