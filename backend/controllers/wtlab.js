// <!--
// Activity Management - Database Integration
// Objective: Implement MongoDB integration with complete CRUD operations.

// Requirements:
// -----------------------------------------------------------------
// Method	Endpoint	            Description
// -----------------------------------------------------------------
// POST	/api/activities	    Create a new activity
// GET	    /api/activities	    Get all activities
// GET	    /api/activities/:id	Get a specific activity by ID
// PUT	    /api/activities/:id	Update a activity by ID
// DELETE	/api/activities/:id	Delete a activity by ID
// -----------------------------------------------------------------


// 1. MongoDB Schema:
// ------------------
// activity schema:
// {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     status: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// }

// Reference JSON format for MongoDB collection:
// --------------------------------------------
// {
// 	"title": "Team Meeting",
// 	"description": "Weekly sync-up with the project team",
// 	"status": "pending"
// }

// 2. Implementation Requirements:
// ---------------------------------
// Connect to MongoDB (local)
// Implement proper error handling
// Add data validation


// 3. API Response Format:
// ------------------------	
// Method: POST
// Path: /api/activities

// Response:

//     If successful:
//       res.status(201).json(newActivity);
    
//     If exception raised:
//       res.status(500).json({ message: error.message });

// ========================================================

// Method: GET
// Path: /api/activities

// Response:
//     If successful:
//       res.status(200).json(activities);
    
//     If exception raised:
//       res.status(500).json({ message: error.message });

// ========================================================
// Method: GET
// Path: /api/activities/:id

// NOTE: pass (_id value as URI params)

// Response:
//     If successful:
//        res.status(200).json(activity);
	
// 	If failed to get the activity:
// 		res.status(404).json({ message: 'Activity not found' });
    
// 	If exception raised:
//         res.status(500).json({ message: error.message });

// ========================================================
// Method: PUT
// Path: /api/activities/:id

// NOTE: pass (_id value as URI params)

// Response:
//     if activity is not found,
//         res.status(404).json({ message: 'Activity not found' });
     
//     If successful:
//         res.status(200).json(updatedActivity);
    
//     If exception raised:
//         res.status(500).json({ message: error.message });
// ==========================================================

// Method: DELETE
// Path: /api/activities/:id

// NOTE: pass (_id value as URI params)

// Response:
//     If successful:
//         res.status(200).json({ message: 'Activity deleted successfully' });
//     If failed to find the activity:
// 		res.status(404).json({ message: 'Activity not found' });
//     If exception raised:
//         res.status(500).json({ message: error.message });

// -->