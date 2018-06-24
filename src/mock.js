var Mock=require('mockjs')

Mock.mock('/api/getInfo',()=>{
	return {
		data:[{'yyf':'123aa'},{'cyt':'456aa'}]
	}
})

Mock.mock('/api/data',()=>{
	return {
		data:200
	}
})


