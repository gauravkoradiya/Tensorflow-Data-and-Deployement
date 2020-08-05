
// use below training function for train normal in memory tensor or array.
async function dotraining(model) {
    const history = await model.fit(xs, ys, {
        epochs: 500,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                console.log("Epoch:"
                    + epoch
                    + " Loss:"
                    + logs.loss);

            }
        }
    });
}



