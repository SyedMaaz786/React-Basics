import Product from "./product.jsx";

function Producttab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "centre",
        alignItems: "centre", 
    }
    return(
        <div style={styles}>
        <Product title ="iPhone 15" idx={0}/>
        <Product title="iPhone 15 Pro"idx={1}/>
        <Product title="iPhone 16"idx={2}/>
        <Product title="iPhone 16 Pro"idx={3}/>
        </div>
    );
}

export default Producttab;