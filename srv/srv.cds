using {db} from '../db/schema';

service myservice {
   @Capabilities : { Readable,Updatable,Insertable,Deletable, }
   entity Personal_details as projection on db.Personal_details;

   entity Project as projection on db.Project;

}
