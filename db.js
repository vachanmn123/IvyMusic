/** 
 * @author: Vachan MN
 * @file: This file contains the database object class
 * @version: 1.0
 * 
*/

const fs = require("fs");

class Database {
    /**
     * @description Constructor for the Database class
     * @param {string} path Path to the database file
     * @param {Object} client bot client
    */
    constructor(path, client){
        this.path = path;
        this.client = client;
        let db = undefined;
		try{
			db = fs.readdirSync(path);
			console.log("Loaded database");
			}catch(e){
				console.log("Database not found, Creating new Database");
				fs.mkdirSync(path);
				db = fs.readdirSync(path);
				console.log("Loaded Database");
			}
		const Guilds = client.guilds.cache.map(g => g);
		for (const server of Guilds) {
				try{
					fs.readdirSync(path + "/" + server.id);
                    console.log("Loaded server database for " + server.name);
				} catch(e){
					console.log("Database not found, Creating new Database for " + server.name);
					fs.mkdirSync(path + "/" + server.id);
				}
			}
    }

    /**
     * @description Get a server db object
     * @param {string} serverId Server ID
     * @returns {fs.Dir} Server Database Object
     */
    
    getServerDb(serverId){
        const path = this.path + "/" + serverId;
        const db = fs.readdirSync(path);
        return db;
    }

    /**
     * @description Add a new collection to the database
     * @param {string} serverId Server ID
     * @param {string} collectionName Collection Name
     * @returns {Object} Collection json object
        */
    addCollection(serverId, collectionName){
        const path = this.path + "/" + serverId + "/" + collectionName + ".json";
        let collection = undefined;
        try{
            const collection = fs.readdirSync(path);
            console.log("Collection already exists");
        } catch (e){
            fs.writeFileSync(path, JSON.stringify({}));
            console.log("Collection created");
            collection = fs.readdirSync(path);
        }
        return db;
    }

    /**
     * @description Get a collection from the database
     * @param {string} serverId Server ID
     * @param {string} collectionName Collection Name
     * @returns {Object} Collection json object
     */
    getCollection(serverId, collectionName){
        const path = this.path + "/" + serverId + "/" + collectionName + ".json";
        let collection = undefined;
        try{
            collection = fs.readdirSync(path);
            console.log("Collection found");
        } catch (e){
            console.log("Collection not found");
        }
        return collection;
    }

    /**
     * @description update the collection
     * @param {string} serverId Server ID
     * @param {string} collectionName Collection Name
     * @param {Object} collection Collection Object
     */
    updateCollection(serverId, collectionName, collection){
        const path = this.path + "/" + serverId + "/" + collectionName + ".json";
        try{
            fs.writeFileSync(path, JSON.stringify(collection));
            console.log("Collection updated");
        } catch (e){
            console.log("Collection not found");
        }
    }
}

module.exports = Database;