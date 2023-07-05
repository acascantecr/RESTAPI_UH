const{Pool}=require('pg');

const pool = new Pool({
    host:'localhost',
    user:'t_user',
    password:'123',
    database:'taller',
    port:'5432'

});

const getUsers = async (req,res)=>{
    const response = await pool.query('SELECT * FROM PERSONAS');
    //console.log(response.rows);
    res.status(200).json(response.rows);
}

const getUsersbyid = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM PERSONAS WHERE idpersona = $1',[id]);
    //console.log(response.rows);
    res.status(200).json(response.rows);
    //res.send('User id ' + req.params.id);
}

const createUser = async (req,res)=>{
    const {nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado} = req.body;
    const response = await pool.query('INSERT INTO PERSONAS (nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado]);
    console.log(response.rows[0]['idpersona']);
    /*if (tipopersona=true) {
        pool.query('INSERT INTO USUARIOS (idPersona,userid,password,estado) VALUES ($1,$2,$3,$4) RETURNING *',[response.rows[0]['idpersona'],nombre.substring(0,1)+apellido1,'Welcome',true]);        
    }
    /*res.json({
        message:'Usuario agregado',
        body:{
            user:{nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado}
        }
    });*/
    res.status(200).json(response.rows);
};

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const {nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado} = req.body;
    const response = await pool.query('UPDATE PERSONAS SET nombre = $1,apellido1 = $2,apellido2 = $3,telefono = $4,cedula = $5,direccion = $6,tipopersona = $7,estado = $8 WHERE idpersona = $9',[nombre,apellido1,apellido2,telefono,cedula,direccion,tipopersona,estado,id]);
    console.log(response);
    res.json(`Usuario Actualizado Satisfactoriamente`);
}

const deteleUser = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM PERSONAS WHERE idpersona = $1',[id]);
    console.log(response);
    res.json(`Usuario ${1} eliminado satisfactoriamente`);

}

module.exports={ 
    getUsers,
    createUser,
    getUsersbyid,
    deteleUser,
    updateUser
};