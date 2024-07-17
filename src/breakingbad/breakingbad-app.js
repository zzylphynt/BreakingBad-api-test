/**
 * @returns {Promise<Object>}
 */
const fetchQuote = async () => {
  const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);

  const data = await res.json();
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "BreakingBad App";
  element.innerHTML = "Loading...";

  await fetchQuote();

  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteBtn = document.createElement("button");
  nextQuoteBtn.innerText = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn);
  };

  nextQuoteBtn.addEventListener("click", async () => {
    element.innerHTML = "Loading...";
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
