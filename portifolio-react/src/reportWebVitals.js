
/*constante é como uma variavel só que não pode ser alterada */
/**reportWeb... é o nome da funcao que inclusive é ela que é chamada no index */
const reportWebVitals = onPerfEntry => {
  /**if = se  */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
