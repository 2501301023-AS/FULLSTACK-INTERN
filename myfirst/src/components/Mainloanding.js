// import React, { useState } from 'react';

// const products = [
//     { id: 1, title: "iphone15", category: "Smartphone", rating: "4.8", stock: "1505", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgDVLegDd3sEzXpp-VAUpugHDya4A9FK5GlFmQLSFMkAOUjbM8vTFrLejCceQWbVmplfEpkIe6LH-kW2skg3jiXUMC1OV_VQ", description: "Latest iphone", Price: "Price:-150000 Rs" },
//     { id: 2, title: "shoe", category: "Clothes", rating: "4.0", stock: "150", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRA3uQ9s5wcHUQfSlp9f1YibadvE9HA5ALyjwmOLuyRTMWJn77xTuzG_qrWbKtngNB5PJUtW0plvfyNY64ez-2HeQXPtyD3T5wZvg322gJn1Bgfz0rVmFbs8A", description: "Shoes for Girls", Price: "Price:-2000 Rs" },
//     { id: 3, title: "shirt", category: "CLothes", rating: "3.8", stock: "157", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT507ujsMj-SpI23lHuaSbiyLGwIU9v9UmLN2sUKze11QD4PpLsQiLDoqo&s=10/shopping?q=tbn:ANd9GcRgDVLegDd3sEzXpp-VAUpugHDya4A9FK5GlFmQLSFMkAOUjbM8vTFrLejCceQWbVmplfEpkIe6LH-kW2skg3jiXUMC1OV_VQ", description: "Shirt for younger children", Price: "Price:-1500 Rs" },
//     { id: 4, title: "pant", category: "Clothes", rating: "3.0", stock: "158", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJEpcPog83g5QerN4hnXlGOogO7jm3iU4jNLAGAh6x_A6z66PY87ERGQ&s=10", description: "Pant for men", Price: "Price:-2000 Rs" },
//     { id: 5, title: "Laptop", category: "Electronic", rating: "4.1", stock: "1530", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGmY7_eFU89FVd9dnriuqMI0g1E6vqXHeHyfhVxF05g&s=10", description: "Latest iphoneHp laptop branded", Price: "Price:-100000 Rs" },
//     { id: 6, title: "iphone17", category: "Smartphone", rating: "4.8", stock: "1500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYu0jGSc5fq63_ZjchHH9MOphbDTc-f0VeTw9Q4xKYQ&s=10", description: "Ihpone 17", Price: "Price:-170000 Rs" },
//     { id: 7, title: "macbook air", category: "Electronic", rating: "4.2", stock: "1575", image: "https://i5.walmartimages.com/asr/450a39cd-f71b-42a1-8351-4a01c20dc3b7.2e9817c8b13b888b0b67f67ec743edc6.jpeg", description: "Macbook air for apple users", Price: "Price:-70000 Rs" },
//     { id: 8, title: "iphone13", category: "Smartphone", rating: "4.2", stock: "1580", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxEBTk9KpX8kQly2dG09c7d2fKWDodGZcIBW5ATlppA&s=10", description: "Iphone 13", Price: "Price:-85000 Rs" },
//     { id: 9, title: "iphone12pro", category: "Smartphone", rating: "4.3", stock: "105", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCV5QTrANS9EpNJrXqssELHkUeY39DaNOT71a4NJ6D_Q&s=10", description: "Iphone12 pro for pro user of apple", Price: "Price:-35000 Rs" },
//     { id: 10, title: "pc", category: "Electronic", rating: "4.4", stock: "195", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgCOFdmhroTO2iFDMPcTt10zAhhbCRpxyndGwCDLX-w&s=10", description: "Pc for gaming person", Price: "Price:-85000 Rs" },
//     { id: 11, title: "watch", category: "Smart Watch", rating: "4.0", stock: "1305", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNx0R32k46jAl-xpE8Z1rJ_3EXcn8uZnUoQb4PNrQQlQ&s=10", description: "Latest Watch refelect the time", Price: "Price:-2499 Rs" }
// ];

// const ProductCard = ({ product, onAddToCart }) => {
//     const [quantity, setQuantity] = useState(0);
//     const [currentStock, setCurrentStock] = useState(Number(product.stock));

//     const Increase = () => {
//         if (currentStock > 0) {
//             setQuantity(quantity + 1);
//             setCurrentStock(currentStock - 1);
//         }
//     };

//     const decrease = () => {
//         if (quantity > 0) {
//             setQuantity(quantity - 1);
//             setCurrentStock(currentStock + 1);
//         }
//     };

//     const handleAddToCartClick = () => {
//         if (quantity > 0) {
//             onAddToCart(product, quantity);
//             setQuantity(0);
//         }
//     };

//     return (
//         <div style={styles.card}>
//             <img src={product.image} alt={product.title} style={styles.image} />
//             <div style={styles.info}>
//                 <span style={styles.category}>{product.category}</span>
//                 <h3 style={styles.title}>{product.title}</h3>
//                 <p style={styles.description}>{product.description}</p>
//                 <p style={styles.Price}>{product.Price}</p>
                
//                 <span style={styles.qu}>
//                     Quantity: {quantity} 
//                     <button 
//                         onClick={Increase} 
//                         disabled={currentStock === 0}
//                         style={{
//                             ...styles.btnPlus, 
//                             ...(currentStock === 0 ? styles.disabledBtn : {})
//                         }}
//                     > + </button>
//                     <button 
//                         onClick={decrease} 
//                         disabled={quantity === 0}
//                         style={{
//                             ...styles.btnMinus, 
//                             ...(quantity === 0 ? styles.disabledBtn : {})
//                         }}
//                     > - </button>
//                 </span>

//                 <div style={styles.meta}>
//                     <span>⭐ {product.rating}</span>
//                     <span>Stock: {currentStock}</span>
                   
//                     <button 
//                         onClick={handleAddToCartClick} 
//                         disabled={quantity === 0}
//                         style={{...styles.btn, ...(quantity === 0 ? styles.disabledBtn : {})}}
//                     >
//                         Add to cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Mainloanding = () => {
//     const [cart, setCart] = useState([]);
//     const [isCartOpen, setIsCartOpen] = useState(false); 

//     const parsePrice = (priceStr) => {
//         const match = priceStr.match(/\d+/);
//         return match ? parseInt(match[0], 10) : 0;
//     };

//     const handleAddToCart = (product, selectedQty) => {
//         setCart((prevCart) => {
//             const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
//             const cleanPrice = parsePrice(product.Price);

//             if (existingItemIndex > -1) {
//                 const updatedCart = [...prevCart];
//                 updatedCart[existingItemIndex].quantity += selectedQty;
//                 return updatedCart;
//             } else {
//                 return [...prevCart, { ...product, priceNum: cleanPrice, quantity: selectedQty }];
//             }
//         });
//     };

//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);

//     return (
//         <div style={styles.container}>
            
           
//             <div style={styles.navbar}>
//                 <h1 style={styles.heading}>Product Catalog</h1>
//                 <div 
//                     style={styles.cartSummary} 
//                     onClick={() => setIsCartOpen(true)}
//                 >
//                     🛒 Cart: <strong>{totalItems}</strong> items | Total: <strong>{totalPrice} Rs</strong>
//                 </div>
//             </div>

       
//             <div style={styles.grid}>
//                 {products.map((product) => (
//                     <ProductCard 
//                         key={product.id} 
//                         product={product} 
//                         onAddToCart={handleAddToCart} 
//                     />
//                 ))}
//             </div>

          
//             {isCartOpen && (
//                 <div style={styles.modalOverlay} onClick={() => setIsCartOpen(false)}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={styles.modalHeader}>
//                             <h2 style={{ margin: 0 }}>Shopping Cart Details</h2>
//                             <button style={styles.closeBtn} onClick={() => setIsCartOpen(false)}>✕</button>
//                         </div>
                        
//                         {cart.length === 0 ? (
//                             <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>Your cart is empty!</p>
//                         ) : (
//                             <div>
//                                 <div style={styles.cartItemsList}>
//                                     {cart.map((item) => (
//                                         <div key={item.id} style={styles.cartItemRow}>
//                                             <img src={item.image} alt={item.title} style={styles.cartItemImg} />
//                                             <div style={{ flexGrow: 1 }}>
//                                                 <h4 style={{ margin: '0 0 4px 0', textTransform: 'capitalize' }}>{item.title}</h4>
//                                                 <small style={{ color: '#777' }}>{item.category}</small>
//                                             </div>
//                                             <div style={{ textAlign: 'right' }}>
//                                                 <div><strong>Qty: {item.quantity}</strong></div>
//                                                 <div style={{ color: '#e44d26', fontWeight: 'bold', fontSize: '15px' }}>
//                                                     {item.priceNum * item.quantity} Rs
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div style={styles.modalFooter}>
//                                     <h3>Grand Total: {totalPrice} Rs</h3>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const styles = {
//     container: { padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' },
//     navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 30px auto', borderBottom: '2px solid #eee', paddingBottom: '10px' },
//     heading: { color: '#333', margin: 0 },
//     cartSummary: { fontSize: '20px', backgroundColor: '#fff', padding: '10px 20px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', cursor: 'pointer', userSelect: 'none' },
//     grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' },
//     card: { backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
//     image: { width: '100%', height: '200px', objectFit: 'contain', backgroundColor: '#fff', padding: '10px' },
//     info: { padding: '15px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 },
//     category: { fontSize: '14px', textTransform: 'uppercase', color: '#888', fontWeight: 'bold' },
//     title: { fontSize: '20px', margin: '0', color: '#222', textTransform: 'capitalize' },
//     description: { fontSize: '14px', color: '#666', margin: '0', flexGrow: 1 },
//     meta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', fontWeight: 'bold', color: '#444', borderTop: '1px solid #eee', paddingTop: '10px', marginTop: '10px' },
//     btn: { padding: "10px", backgroundColor: "black", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
//     btnPlus: { fontSize: "16px", marginLeft: "10px", padding: "2px 10px", cursor: "pointer" },
//     btnMinus: { fontSize: "16px", marginLeft: "10px", padding: "2px 10px", cursor: "pointer" },
//     disabledBtn: { opacity: 0.4, cursor: "not-allowed" }, 
//     qu: { fontSize: "18px", fontWeight: 'bold', display: 'flex', alignItems: 'center', margin: '5px 0' },
//     Price: { fontSize: "18px", fontWeight: 'bold', color: '#e44d26' },
  
//     modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
//     modalContent: { backgroundColor: '#fff', padding: '25px', borderRadius: '10px', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' },
//     modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px' },
//     closeBtn: { background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#666' },
//     cartItemsList: { display: 'flex', flexDirection: 'column', gap: '15px' },
//     cartItemRow: { display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #f5f5f5', paddingBottom: '10px' },
//     cartItemImg: { width: '50px', height: '50px', objectFit: 'contain', backgroundColor: '#f9f9f9', borderRadius: '4px' },
//     modalFooter: { borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '15px', textAlign: 'right' }
// };

// export default Mainloanding;


import React, { useState } from 'react';

// ==========================================
// 1. PRODUCT DATA ARRAY
// ==========================================
const products = [
    { id: 1, title: "iphone 15", category: "Smartphone", rating: "4.8", stock: "1505", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgDVLegDd3sEzXpp-VAUpugHDya4A9FK5GlFmQLSFMkAOUjbM8vTFrLejCceQWbVmplfEpkIe6LH-kW2skg3jiXUMC1OV_VQ", description: "Latest iphone", Price: "Price:-150000 Rs" },
    { id: 2, title: "shoe", category: "Clothes", rating: "4.0", stock: "150", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRA3uQ9s5wcHUQfSlp9f1YibadvE9HA5ALyjwmOLuyRTMWJn77xTuzG_qrWbKtngNB5PJUtW0plvfyNY64ez-2HeQXPtyD3T5wZvg322gJn1Bgfz0rVmFbs8A", description: "Shoes for Girls", Price: "Price:-2000 Rs" },
    { id: 3, title: "shirt", category: "Clothes", rating: "3.8", stock: "157", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT507ujsMj-SpI23lHuaSbiyLGwIU9v9UmLN2sUKze11QD4PpLsQiLDoqo&s=10", description: "Shirt for younger children", Price: "Price:-1500 Rs" },
    { id: 4, title: "pant", category: "Clothes", rating: "3.0", stock: "158", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJEpcPog83g5QerN4hnXlGOogO7jm3iU4jNLAGAh6x_A6z66PY87ERGQ&s=10", description: "Pant for men", Price: "Price:-2000 Rs" },
    { id: 5, title: "Laptop", category: "Electronic", rating: "4.1", stock: "1530", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGmY7_eFU89FVd9dnriuqMI0g1E6vqXHeHyfhVxF05g&s=10", description: "Latest HP laptop branded", Price: "Price:-100000 Rs" },
    { id: 6, title: "iphone 17", category: "Smartphone", rating: "4.8", stock: "1500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYu0jGSc5fq63_ZjchHH9MOphbDTc-f0VeTw9Q4xKYQ&s=10", description: "Iphone 17", Price: "Price:-170000 Rs" },
    { id: 7, title: "macbook air", category: "Electronic", rating: "4.2", stock: "1575", image: "https://i5.walmartimages.com/asr/450a39cd-f71b-42a1-8351-4a01c20dc3b7.2e9817c8b13b888b0b67f67ec743edc6.jpeg", description: "Macbook air for apple users", Price: "Price:-70000 Rs" },
    { id: 8, title: "iphone 13", category: "Smartphone", rating: "4.2", stock: "1580", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxEBTk9KpX8kQly2dG09c7d2fKWDodGZcIBW5ATlppA&s=10", description: "Iphone 13", Price: "Price:-85000 Rs" },
    { id: 9, title: "iphone 12 pro", category: "Smartphone", rating: "4.3", stock: "105", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCV5QTrANS9EpNJrXqssELHkUeY39DaNOT71a4NJ6D_Q&s=10", description: "Iphone12 pro for pro user of apple", Price: "Price:-35000 Rs" },
    { id: 10, title: "pc", category: "Electronic", rating: "4.4", stock: "195", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgCOFdmhroTO2iFDMPcTt10zAhhbCRpxyndGwCDLX-w&s=10", description: "Pc for gaming person", Price: "Price:-85000 Rs" },
    { id: 11, title: "watch", category: "Smart Watch", rating: "4.0", stock: "1305", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNx0R32k46jAl-xpE8Z1rU_3EXcn8uZnUoQb4PNrQQlQ&s=10", description: "Latest Watch reflect the time", Price: "Price:-2499 Rs" }
];

// ==========================================
// 2. CHILD COMPONENT: PRODUCT CARD
// ==========================================
const ProductCard = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [currentStock, setCurrentStock] = useState(Number(product.stock));

    const handleIncrease = () => {
        if (currentStock > 0) {
            setQuantity(prev => prev + 1);
            setCurrentStock(prev => prev - 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
            setCurrentStock(prev => prev + 1);
        }
    };

    const handleAddToCartClick = () => {
        if (quantity > 0) {
            onAddToCart(product, quantity);
            setQuantity(0);
        }
    };

    const isOutOfStock = currentStock === 0;

    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img src={product.image} alt={product.title} style={styles.image} />
            </div>
            <div style={styles.info}>
                <span style={styles.category}>{product.category}</span>
                <h3 style={styles.title}>{product.title}</h3>
                <p style={styles.description}>{product.description}</p>
                <p style={styles.price}>{product.Price}</p>
                
                <div style={styles.quantitySelector}>
                    <span>Quantity: <strong>{quantity}</strong></span>
                    <div style={styles.qtyButtons}>
                        <button 
                            onClick={handleIncrease} 
                            disabled={isOutOfStock}
                            style={{...styles.qtyBtn, ...(isOutOfStock ? styles.disabledBtn : {})}}
                        >+</button>
                        <button 
                            onClick={handleDecrease} 
                            disabled={quantity === 0}
                            style={{...styles.qtyBtn, ...(quantity === 0 ? styles.disabledBtn : {})}}
                        >-</button>
                    </div>
                </div>

                <div style={styles.meta}>
                    <span>⭐ {product.rating}</span>
                    <span>Stock: {currentStock}</span>
                </div>

                <button 
                    onClick={handleAddToCartClick} 
                    disabled={quantity === 0}
                    style={{...styles.addToCartBtn, ...(quantity === 0 ? styles.disabledBtn : {})}}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// ==========================================
// 3. MAIN APPLICATION COMPONENT
// ==========================================
const Mainloading = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false); 
    
    // --- SEARCH STATE ---
    const [searchQuery, setSearchQuery] = useState("");

    const parsePrice = (priceStr) => {
        const match = priceStr.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
    };

    const handleAddToCart = (product, selectedQty) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
            const cleanPrice = parsePrice(product.Price);

            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += selectedQty;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, priceNum: cleanPrice, quantity: selectedQty }];
            }
        });
    };

    // --- LIVE FILTER LOGIC ---
    const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);

    return (
        <div style={styles.container}>
            {/* Header / Navbar */}
            <header style={styles.navbar}>
                <h1 style={styles.heading}>Product Catalog</h1>
                
                {/* ========================================== */}
                {/* HERE IS YOUR SEARCH BOX */}
                {/* ========================================== */}
                <input 
                    type="text" 
                    placeholder="🔍 Search product by name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={styles.searchBox}
                />

                <div style={styles.cartSummary} onClick={() => setIsCartOpen(true)}>
                    🛒 Cart: <strong>{totalItems}</strong> items | <strong>{totalPrice} Rs</strong>
                </div>
            </header>

            {/* Filtered Product Listing Grid */}
            <main style={styles.grid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={handleAddToCart} 
                        />
                    ))
                ) : (
                    <div style={styles.noResults}>
                        <h3>No products found</h3>
                        <p>No products match "{searchQuery}". Try searching for something else.</p>
                    </div>
                )}
            </main>

            {/* Shopping Cart Modal Layout */}
            {isCartOpen && (
                <div style={styles.modalOverlay} onClick={() => setIsCartOpen(false)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.modalHeader}>
                            <h2 style={{ margin: 0 }}>Shopping Cart</h2>
                            <button style={styles.closeBtn} onClick={() => setIsCartOpen(false)}>✕</button>
                        </div>
                        
                        {cart.length === 0 ? (
                            <p style={{ textAlign: 'center', padding: '30px', color: '#777' }}>Your cart is empty!</p>
                        ) : (
                            <div>
                                <div style={styles.cartItemsList}>
                                    {cart.map((item) => (
                                        <div key={item.id} style={styles.cartItemRow}>
                                            <img src={item.image} alt={item.title} style={styles.cartItemImg} />
                                            <div style={{ flexGrow: 1 }}>
                                                <h4 style={styles.cartItemTitle}>{item.title}</h4>
                                                <small style={{ color: '#888' }}>{item.category}</small>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <div>Qty: <strong>{item.quantity}</strong></div>
                                                <div style={styles.cartItemPrice}>{item.priceNum * item.quantity} Rs</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={styles.modalFooter}>
                                    <h3>Grand Total: {totalPrice} Rs</h3>
                                    <button style={styles.checkoutBtn} onClick={() => alert('Proceeding to checkout!')}>Checkout</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// ==========================================
// 4. EMBEDDED MODERNISED STYLES OBJECT
// ==========================================
const styles = {
    container: { padding: '30px 20px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' },
    navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto 30px auto', borderBottom: '2px solid #e1e4e8', paddingBottom: '15px', flexWrap: 'wrap', gap: '15px' },
    heading: { color: '#1f2328', margin: 0, fontSize: '28px', fontWeight: '700' },
    cartSummary: { fontSize: '16px', backgroundColor: '#fff', padding: '12px 24px', borderRadius: '30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer', border: '1px solid #e1e4e8' },
    
    // SEARCH BOX STYLE BLOCK
    searchBox: { flex: '1', maxWidth: '400px', minWidth: '260px', padding: '12px 20px', fontSize: '16px', borderRadius: '25px', border: '2px solid #ccd1d9', backgroundColor: '#fff', outline: 'none', transition: 'border-color 0.2s' },
    
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' },
    card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid #e1e4e8' },
    imageContainer: { width: '100%', height: '220px', padding: '15px', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #f0f2f5' },
    image: { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' },
    
    info: { padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 },
    category: { fontSize: '12px', textTransform: 'uppercase', color: '#586069', fontWeight: '700', letterSpacing: '0.5px' },
    title: { fontSize: '20px', margin: '0', color: '#24292e', textTransform: 'capitalize', fontWeight: '600' },
    description: { fontSize: '14px', color: '#57606a', margin: '0', flexGrow: 1 },
    price: { fontSize: '18px', fontWeight: '700', color: '#d9381e', margin: '5px 0' },
    
    quantitySelector: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f6f8fa', padding: '8px 12px', borderRadius: '6px' },
    qtyButtons: { display: 'flex', gap: '5px' },
    qtyBtn: { width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', cursor: 'pointer', border: '1px solid #ccd1d9', borderRadius: '4px', backgroundColor: '#fff' },
    
    meta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#444', fontWeight: '500' },
    addToCartBtn: { width: '100%', padding: '12px', backgroundColor: '#24292e', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
    disabledBtn: { opacity: 0.4, cursor: 'not-allowed', backgroundColor: '#8c95a0' },
    
    noResults: { gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#57606a' },
    
    modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modalContent: { backgroundColor: '#fff', padding: '30px', borderRadius: '16px', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' },
    modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e1e4e8', paddingBottom: '15px', marginBottom: '20px' },
    closeBtn: { background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#57606a' },
    cartItemsList: { display: 'flex', flexDirection: 'column', gap: '20px' },
    cartItemRow: { display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #f6f8fa', paddingBottom: '15px' },
    cartItemImg: { width: '60px', height: '60px', objectFit: 'contain', backgroundColor: '#f6f8fa', borderRadius: '6px', padding: '5px' },
    cartItemTitle: { margin: '0 0 4px 0', textTransform: 'capitalize', color: '#24292e', fontSize: '16px' },
    cartItemPrice: { color: '#d9381e', fontWeight: '700', fontSize: '15px', marginTop: '2px' },
    modalFooter: { borderTop: '2px solid #e1e4e8', paddingTop: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-end' },
    checkoutBtn: { padding: '12px 30px', backgroundColor: '#1f883d', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }
};

export default Mainloading;