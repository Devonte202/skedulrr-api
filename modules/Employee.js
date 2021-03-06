import query from '../database/db.js'

class Employee {

	static createAccount(businessId, firstName, lastName, email, phoneNumber, isAdmin, password, profileImageUrl) {
		const queryText = 'INSERT INTO employee (business_id, first_name, last_name, email, phone_number, is_admin, password, profile_image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);'
		return query(queryText, [businessId, firstName, lastName, email, phoneNumber, isAdmin, password, profileImageUrl])
	}

	static updateAccount(employeeId, firstName, lastName, email, phoneNumber, isAdmin, password, profileImageUrl){
		const queryText = 'UPDATE employee SET first_name = $2, last_name = $3, email = $4, phone_number = $5, is_admin = $6, password = $7, profile_image_url = $8 WHERE id = $1;'
		return query(queryText,[employeeId, firstName, lastName, email, phoneNumber, isAdmin, password, profileImageUrl])
	}

	static deleteAccount(employeeId){
		const queryText = 'DELETE FROM employee WHERE id = $1;'
		return query(queryText, [employeeId])
	}

    static createSchedule(employeeId, eventTypes) {
		const queryText = 'INSERT INTO schedule (employee_id, event_types) VALUES ($1, $2);'
		return query(queryText, [employeeId, eventTypes])
	}

    static updateSchedule(scheduleId, eventTypes) {
		const queryText = 'UPDATE schedule SET event_types = $2 WHERE id = $1;'
		return query(queryText, [scheduleId, eventTypes])
	}

    static deleteSchedule(employeeId){
		const queryText = 'DELETE * FROM schedule WHERE employee_id = $1;'
		return query(queryText, [employeeId])
	}

	static getScheduleById(employeeId) {
		const queryText = 'SELECT * FROM schedule WHERE employee_id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows)
	}

	static getById(employeeId) {
		const queryText = 'SELECT * FROM employee WHERE id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows[0])
	}

	static getByEmail(employeeEmail) {
		const queryText = 'SELECT * FROM employee WHERE email = $1;'
		return query(queryText, [employeeEmail])
			.then((data) => data.rows[0])
	}

    static isAdmin(employeeId) {
		const queryText = 'SELECT is_admin FROM employee WHERE id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows)
	}

    static createTimeslot(scheduleId, timeStart, timeEnd, recurring, availDays, timezone) {
		const queryText = 'INSERT INTO timeslot (schedule_id, time_start, time_end, recurring, avail_days, timezone) VALUES ($1, $2, $3, $4, $5, $6);'
		return query(queryText, [scheduleId, timeStart, timeEnd, recurring, availDays, timezone])
	}

	static deleteTimeslot(timeslotId){
		const queryText = 'DELETE * FROM timeslot WHERE id = $1;'
		return query(queryText, [timeslotId])
	}

	static getAllTimeslots(employeeId) {
		const queryText = 'SELECT * FROM timeslot WHERE employee_id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows)
	}
	
	static createExceptions(employeeId, timeslotId, intervalStart, intervalEnd, exceptionReason) {
		const queryText = 'INSERT INTO timeslot (employee_id, timeslot_id, interval_start, interval_end, exception_reason) VALUES ($1, $2, $3, $4, $5);'
		return query(queryText, [employeeId, timeslotId, intervalStart, intervalEnd, exceptionReason])
	}

	static deleteException(exceptionId){
		const queryText = 'DELETE FROM exception WHERE id = $1;'
		return query(queryText, [exceptionId])
	}

	static getAllExceptions(employeeId) {
		const queryText = 'SELECT * FROM exception WHERE employee_id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows)
	}

	static getAppointmentById(employeeId, appointmentId) {
		const queryText = 'SELECT * FROM appointment WHERE employee_id = $1 AND id = $2;'
		return query(queryText, [employeeId, appointmentId])
			.then((data) => data.rows)
	}

    static getAllAppointmentsById(employeeId) {
		const queryText = 'SELECT * FROM appointment WHERE employee_id = $1;'
		return query(queryText, [employeeId])
			.then((data) => data.rows)
	}

	static getAllAppointments(businessId) {
		const queryText = 'SELECT * FROM appointment WHERE business_id = $1;'
		return query(queryText, [businessId])
			.then((data) => data.rows)
	}

}

export default Employee;
