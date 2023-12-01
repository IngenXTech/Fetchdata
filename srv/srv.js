const cds=require('@sap/cds')
const {Personal_details}=cds.entities('db')
 
const mysrv=function(srv){
 
    srv.on('READ','Personal_details',async(req,res)=>{
        var result=[];
        result=await cds.tx(req).run(SELECT.from(Personal_details))
        return result
    });
 
    srv.on("DELETE","Personal_details", async(req,res)=>{
        let returnData = await cds.transaction(req).run([
            DELETE.from(Personal_details).where(req.data)
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !==undefined){
                return req.data;
            }
            else{
                req.error('error occured');
            }
        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    });
 
    srv.on("CREATE","Personal_details",async(req,res)=>{
        let returnData = await cds.transaction(req).run([
           INSERT.into(Personal_details).entries([req.data])
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }
            else{
                req.error('error');
            }
 
        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    });
 
    srv.on("UPDATE","Personal_details", async(req,res)=>{
     
        let returnData= await cds.transaction(req).run([
            UPDATE(Personal_details).set({
          Name:req.data.Name,
          Age:req.data.Age,
          Mobile:req.data.Mobile,
          email:req.data.email,
             
            }).where({ID: req.data.ID}),
           
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }else{
                req.error('error occured');
            }
        }).catch(err => {
            req.error('error',err);
        });
        return returnData;
      });
   
 
}
 
module.exports=mysrv