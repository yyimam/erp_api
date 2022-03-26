### Sequelize sample

### Installation

`npm install`

### Running

This example requires docker or a local MySQL installation.  If using a local MySQL database, see `app.module.ts` for credentials, and make sure there are matching credentials in the database and the source code.

#### Docker

There is a `docker-compose.yml` file for starting Docker.

`docker-compose up`

After running the sample, you can stop the Docker container with

`docker-compose down`

### Run the sample

Then, run Nest as usual:

`npm run start`


## Repeted function
this code use in every delete function
.then(r=>{
      res.status(HttpStatus.ACCEPTED).send({message: "Deleted", data: r});
    }).catch( err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
  }); 

## Issues
Need to find way for get record after create and update
