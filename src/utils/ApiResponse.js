import { asyncHandler } from "./asyncHandler.js"

class ApiResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}


const logOutUser = asyncHandler(async (req,res)=>{
    User.findById
})

export {ApiResponse}