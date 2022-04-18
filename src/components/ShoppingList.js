import { plantList } from "../datas/plantList";

function ShoppingList() {

    return (
        <div>
            <ul className="shoppingList-plantes">
                {plantList.map((plant) => (
                    <li key={plant.id} className="shoppingList-item">
                    {plant.name}
                    {plant.isSpecialOffer ? <div className="shoppingList-item-promo">Solde</div> : null}
                    </li>
                ))}
            </ul>
        </div>
        
        
    )
}

export default ShoppingList