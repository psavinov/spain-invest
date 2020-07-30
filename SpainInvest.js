var Spain = {
	"data": {
		"andalucia": {
			"itp": function(price, meters, bigfamily) {
				if (price < 180000 || bigfamily) {
					return price * 0.035;
				}

				return price * 0.08;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.007334;
				} else {
					return price * 0.007334;
				}
			}
		},
		"aragon": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.03;
				}

				return price * 0.07;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.005084;
				} else {
					return price * 0.007;
				}
			}
		},
		"asturias": {
			"itp": function(price, meters, bigfamily) {
				if (price <= 300000) {
					return price * 0.08;
				}
				else if (price <= 500000) {
					return price * 0.09;
				}
				else {
					return price * 0.1;
				}
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00679;
				} else {
					return price * 0.00798;
				}
			}
		},
		"baleares": {
			"itp": function(price, meters, bigfamily) {
				if (price <= 400000) {
					return price * 0.08;
				}
				else if (price <= 600000) {
					return price * 0.09;
				}
				else {
					return price * 0.1;
				}
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00605;
				} else {
					return price * 0.00735;
				}
			}
		},
		"canarias": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.04;
				}

				return price * 0.065;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00524;
				} else {
					return price * 0.003;
				}
			}
		},
		"cantabria": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.05;
				}

				if (price > 300000) {
					return price * 0.1;
				}

				return price * 0.08;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00459;
				} else {
					return price * 0.0087;
				}
			}
		},
		"castilla_lamancha": {
			"itp": function(price, meters, bigfamily) {
				if (price > 180000) {
					return price * 0.07;
				}

				return price * 0.08;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00448;
				} else {
					return price * 0.00848;
				}
			}
		},
		"castilla_leon": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.05;
				}

				if (price > 250000) {
					return price * 0.1;
				}

				return price * 0.08;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.006144;
				} else {
					return price * 0.0107;
				}
			}
		},
		"catalunya": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.05;
				}

				return price * 0.1;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.0075;
				} else {
					return price * 0.01;
				}
			}
		},
		"valencia": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.04;
				}

				return price * 0.1;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.00806;
				} else {
					return price * 0.00437;
				}
			}
		},
		"extremadura": {
			"itp": function(price, meters, bigfamily) {
				if (price <= 360000) {
					return price * 0.08;
				}
				else if (price <= 600000) {
					return price * 0.1;
				}
				else {
					return price * 0.11;
				}
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.007;
				} else {
					return price * 0.01217;
				}
			}
		},
		"galicia": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.04;
				}

				return price * 0.1;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.0051;
				} else {
					return price * 0.0051;
				}
			}
		},
		"rioja": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.03;
				}

				return price * 0.07;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.0059;
				} else {
					return price * 0.0089;
				}
			}
		},
		"madrid": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.04;
				}

				return price * 0.06;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.0051;
				} else {
					return price * 0.00567;
				}
			}
		},
		"murcia": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.03;
				}

				return price * 0.08;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.006421;
				} else {
					return price * 0.006644;
				}
			}
		},
		"navarra": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily) {
					return price * 0.05;
				}

				return price * 0.06;
			},
			"ibi": function (price, isCity) {
				if (isCity) {
					return price * 0.007;
				} else {
					return price * 0.007;
				}
			}
		},
		"pais_vasco": {
			"itp": function(price, meters, bigfamily) {
				if (bigfamily || (meters < 120)) {
					return price * 0.025;
				}

				return price * 0.04;
			}
		},
		"ibi": function (price, isCity) {
			if (isCity) {
				return price * 0.007;
			} else {
				return price * 0.007;
			}
		}
	}
};

Spain.calculateItp = function() {
	var isNew = $('#aptNew:checked').val() !== 'on';

	if (isNew) {
		return 0;
	}

	var price = $('#aptPrice').val();
	var meters = $('#aptSize').val();
	var bigFamily = $('#aptBigFamily:checked').val() === 'on';

	var community = $('#aptRegion').val();

	return Number(this.data[community].itp(price, meters, bigFamily));
};

Spain.calculateIbi = function() {
	var price = $('#aptPrice').val();
	var isUrban = $('#aptUrban:checked').val() === 'on';

	var community = $('#aptRegion').val();
	var term = $('#calcTerm').val();

	var manualIbi = $('#manualIbi:checked').val() === 'on';
	var ibiValue = $('#ibiValue');

	var ibi = manualIbi ? 
		Number((ibiValue.val()/100) * price * term) : 
		Number(this.data[community].ibi(price, isUrban) * term);

	return ibi;
};

Spain.calculateIrpf = function () {
	var income = $('#rentMonthCost').val() * $('#rentTerm').val();

	var term = $('#calcTerm').val();

	var common = $('#expCommon').val();
	var discount = $('#taxDiscount').val();

	income -= Number(common);
	income -= Number(discount);

	if (income < 1000) {
		return 0;
	}

	var isResident = $('#aptresident:checked').val() === 'on';

	var taxRate = 0.19;

	if (!isResident || income > 12450) {
		taxRate = 0.24;
	}

	if (income > 20200) {
		taxRate = 0.3;
	}
	else if (income > 35200) {
		taxRate = 0.37;
	}
	else if (income > 60000) {
		taxRate = 0.45;
	}

	return Number(income * taxRate * term)
};

Spain.calculateCredit = function () {
	var creditAmnt = $('#expCreditAmnt').val();
	var creditTerm = $('#expCreditTerm').val();

	return Number(creditAmnt * creditTerm * 12);
};

Spain.calculateExpenses = function () {
	var repair = $('#expRenew').val();
	var agent = $('#expAgent').val();
	var furniture = $('#expFurniture').val();
	var common = $('#expCommon').val();

	var term = $('#calcTerm').val();

	return Number(agent) + Number(repair) + Number(furniture) + Number(term * common);
};

Spain.calculateIncome = function () {
	var income = $('#rentMonthCost').val() * $('#rentTerm').val();

	var term = $('#calcTerm').val();

	return Number(income * term);
};

Spain.calculateTotal = function () {
	var income = this.calculateIncome();

	var expenses = this.calculateExpenses();
	expenses += this.calculateIbi();
	expenses += this.calculateItp();
	expenses += this.calculateIrpf();

	if (this.calculateCredit() > 0) {
		expenses += this.calculateCredit();
	}
	else {
		var price = $('#aptPrice').val();

		expenses += Number(price);
	}

	return income - expenses;
};

Spain.calculateStats = function () {
	$('#resultCredit').val(this.calculateCredit().toFixed(2));
	$('#resultIbi').val(this.calculateIbi().toFixed(2));
	$('#resultIncome').val(this.calculateIncome().toFixed(2));
	$('#resultIrpf').val(this.calculateIrpf().toFixed(2));
	$('#resultItp').val(this.calculateItp().toFixed(2));
	$('#resultExp').val(this.calculateExpenses().toFixed(2));
	$('#resultTotal').val(this.calculateTotal().toFixed(2));

	var finalPrice = Number($('#finalPrice').val());

	$('#resultTotalFinal').val((this.calculateTotal() + finalPrice).toFixed(2));

	var term = $('#calcTerm').val();

	$('.total-term').html('За&nbsp;<b>' + term + '</b>&nbsp;лет&nbsp;');
};

Spain.refreshIbi = function () {
	var manualIbi = $('#manualIbi:checked').val() === 'on';
	var ibiValue = $('#ibiValue');
	var isUrban = $('#aptUrban:checked').val() === 'on';
	var community = $('#aptRegion').val();

	if (!manualIbi) {
		ibiValue.val(Number(this.data[community].ibi(1, isUrban)*100).toFixed(2));
	}
	
};

Spain.switchManualIbi = function () {
	var manualIbi = $('#manualIbi:checked').val() === 'on';

	var ibiValue = $('#ibiValue');

	if (manualIbi) {
		ibiValue.removeAttr('readonly');
	} else {
		ibiValue.attr('readonly', true);
		this.refreshIbi();
	}
};