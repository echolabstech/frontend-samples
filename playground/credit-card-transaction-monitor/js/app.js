/* Put all your javascript code here, you are free to add additional javascript classes */
/* Please include all external libraries (e.g. Angular, React, etc.) by linking to a CDN, see examples in index.html */

/*
	API notes from the problem description:

	var callback = function(transactionStatusList) {
		//transactionStatusList is an array of Transation Status objects
		//Each Transaction Status object contains the following properties:
		//transactionId: string - the id of the transaction (unique across all transactions)
		//receivedTime: number - the time that the transaction was received by the transaction processing system, in milliseconds since unix epoch.
		//ccNetwork: string - the credit card network (e.g. Visa, MasterCard, etc.)
		//ccNumber: string - the credit card number
		//amount: number - the amount of money ($ USD) transferred from the card in the transaction
		//status: string - one of PENDING, IN_PROGRESS, SUCCESS, and DECLINED
		//progress: number - a number from 0 to 100
		
		//NOTE: transationStatusList will only contain updates for a subset of all transactions, so make sure to account for this in your code.
	}

	//TransactionStatusMonitor is a global object
	TransactionStatusMonitor.registerStatusUpdateListener(callback);
*/