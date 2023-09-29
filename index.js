const output = {
  rewards: []
};

if (ikContext && ikContext.account && ikContext.account.isDraft === true) {
  const sku = "Cover01";
  const itemPresent = ikContext.account.transactionLines.find(line => line.itemSku === sku);

  if (!itemPresent) {
    output.rewards.push({
      type: "ADD",
      sku: sku
    });
  }
}

JSON.stringify(output);
