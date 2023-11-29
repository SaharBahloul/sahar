
const {con} = require("../Configuration/connectDb") 
  
const getArtisans = async (request, response) => { 
     try { 
 
        con.connect(function(err) { 
        if (err) throw err; 
        con.query("SELECT * FROM artisan", function (err, result, fields) { 
        if (err) throw err; 
        console.log(result); 
        response.status(200).json({ artisan: result }); 
 
        }); 
      }); 
           } 
       
     catch (error) { 
        response.status(500).json({ msg: "error on getting artisans" }); 
           } 
         }; 
 
const getOneUserByName = async (request, response) => { 
       const user = request.body;           
 
      try { 
      
        con.connect(function(err) { 
        if (err) throw err; 
con.query('SELECT * FROM employees WHERE `name`=?  ', [user.name], function (err, 
result,fields) { 
        if (err) throw err; 
        console.log(result); 
        response.status(200).json({ employee: result }); 
      
             }); 
            }); 
      
                } 
            
       catch (error) { 
         response.status(500).json({ msg: "error on getting employee" }); 
                } 
              }; 
 
const getOneUserById = async (request, response) => { 
      const id = request.params.id; 
try { 
            
   con.connect(function(err) { 
   if (err) throw err; 
   con.query( `SELECT * FROM employees WHERE id= ${id}`, function (err, result) { 
            if (err) throw err;       
            console.log(result); 
            response.status(200).json({ employee: result }); 
            
                   }); 
                  }); 
            
                      } 
                  
          catch (error) { 
            response.status(500).json({ msg: "error on getting employee" }); 
                      } 
                    }; 
 
const register = async (request, response) => { 
                    
    const user = request.body;           
         
      try { 
                     
        con.connect(function(err) { 
        if (err) throw err;     
 con.query( 'INSERT INTO buyer SET ?', user, function (err, result,fields) { 
             if (err) throw err; 
response.status(200).json({  buyer: result, msg: " SUCCESS Buyer Added" }); 
 
              }); 
              });             
 
          } 
              catch (error) { 
             response.status(500).json({ msg: "error on adding buyer" }); 
                      } 
                    };          
                     
        
              
const putUser = async (req, res) => { 
 
const id=req.params.id; 
const user=req.body 
 console.log(user) 
   
      try { 
con.query('UPDATE `employees` SET `name`=?,`address`=?,`email`=? where `id`=?', 
[user.name,user.address, user.email, id], function (err, result,fields) { 
       if (err) throw err; 
        console.log(result.affectedRows + " record(s) updated"); 
                         
    res.status(200).json({  msg: "update sucess" }); }); 
        } catch (error) { 
       res.status(500).json({ msg: "error on update employee" }); 
         } 
        }; 
 
   
const deleteUser = async (req, res) => { 
          const id = req.params.id; 
          try { 
con.query('DELETE FROM `employees` WHERE `id`=?', [id], function 
(error, results, fields) { 
if (error) throw error; 
res.status(200).json({  msg: "delete done" });}); 
} catch (error) { 
res.status(500).json({ msg: "error on deleting employee" }); 
} 
};                 
module.exports = 
{   
getArtisans,getOneUserByName,getOneUserById,putUser,deleteUser };