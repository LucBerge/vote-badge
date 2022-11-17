const AWS = require("aws-sdk");
const s3 = new AWS.S3()

class Database {
	DEFAULT_VALUE_VOTE = 0
	
	constructor() {
		this.bucket = process.env.BUCKET
	}
	
	async get_vote(key) {
		try{
			let vote = await s3.getObject({
				Bucket: this.bucket,
				Key: key,
			}).promise()
			const integer = parseInt(vote.Body)
			if(isNaN(integer)) {
				integer = this.DEFAULT_VALUE_VOTE
			}
			return integer
		}
		catch (error) {
			
			if (error.code === 'NoSuchKey') {
				return this.DEFAULT_VALUE_VOTE
			}
			else {
				console.log("Cannot access the database:")
				console.log(error);
				return null
			}
		}
	}
	
	async set_vote(key, value) {
		try {
			await s3.putObject({
				Body: value.toString(),
				Bucket: this.bucket,
				Key: key,
			}).promise()
			return value
		}
		catch (error) {
			console.log("Cannot access the database:")
			console.log(error);
			return null
		}
	}
	
	async increment_vote(key) {
		let value = await this.get_vote(key)
		if(value != null) {
			value++
			value = await this.set_vote(key, value)
		}
		return value
	}
}

module.exports = {
	Database
}
