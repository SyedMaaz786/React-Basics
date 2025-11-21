import './product.css';
import Prize from './Prize';
function Product({title,idx}) {
    let oldPrices = ["90,000","80,000","70,000","60,000"];
    let newPrices = ["50,000","40,000","30,000","20,000"];
    let description = [
        ["Dynamic island","C-type"],
        ["A-17 Bionic chip","Pro model"],
        ["Design change","New-color"],
        ["A-19 Bionic chip","Beast"],
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Prize oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;