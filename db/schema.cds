namespace db;

using { cuid } from '@sap/cds/common';

entity Personal_details : cuid
{
    key ID : String(100);
    Name : String(100);
    Age : String(100);
    Mobile : String(100);
    email : String(100);
}

entity Organization
{
    key ID : UUID;
    Emp_id : String(100);
    Reporting_manager : String(100);
    Assigned_role : String(100);
    Technology : String(100);
}

entity Project
{
    key ID : UUID;
    Project_name : String(100);
    Period_of_project : String(100);
    Members : String(100);
    Technology_used : String(100);
}
