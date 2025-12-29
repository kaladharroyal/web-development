/*
Theory: Promise.all (concise)

- Input: an iterable of Promises (or values). Promise.all starts them "in parallel" (concurrently).
- Output: returns a single Promise that
    • fulfills with an array of fulfillment values (same order as inputs) when every input fulfills,
    • rejects immediately if any input rejects, with that rejection reason.
- Notes: order of results matches input order even if promises settle at different times. Use
    `Promise.allSettled`, `Promise.any`, or `Promise.race` for alternate behaviors.
*/

function processSingleOrder(orderId){
    return new Promise(resolve => {
        const processingTime = 500 + Math.random()*100 + 2000;
        setTimeout(()=>{
            resolve({
                orderId,
                status:"Processed",
                processingTime: Math.round(processingTime)
            });
        },processingTime)
    });
}

const orderIds = ['order101', 'order102', 'order103', 'order104', 'order105']

// Promise all orders in parallel
Promise.all(orderIds.map(processSingleOrder))
.then((result) => {
    console.log("All orders processed");
    console.table(result)
    const totalTime = result.reduce((sum, order)=>{
        return sum + order.processingTime;
    }, 0);
    console.log(`Total processing time: ${totalTime}`);
}).catch((err) => {
    console.error("Batch processing failed:", err)
    
});






