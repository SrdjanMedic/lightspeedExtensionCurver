var output = {
  rewards: [],
};

if (ikContex.account.isDraft == true) {
  var sku = "CFD1";
  var itemPresent = ikContext.account.transactionLines.find(function (line) {
    return line.itemSku === sku;
  });

  if (!itemPresent) {
    output.rewards.push({
      type: "ADD",
      sku: sku,
    });
  }
}

JSON.stringify(output);
