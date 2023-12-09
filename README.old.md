## Assignment A
**Task:** Build a web-based GUI using React to visualize sensor values from the API endpoint SpectrumStatus.
**Endpoint:** https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus
```json
{
    "velocity": 95.92672776026119,
    "altitude": -28317.19781796544,
    "temperature": -27.608042504846466,
    "statusMessage": "Proceeding with planned phase transition.",
    "isAscending": true,
    "isActionRequired": true
}
```
Data: Velocity, altitude, temperature, status message, boolean for ascent/descent, and action required.
UI Requirements: Choose visualization types (like line charts, bar charts, gauges, text boxes) for easy understanding. Implement a user-triggered data refresh (e.g., button click).

## Assignment B
**Task:** Use the live data pushed by the server to continuously update the user interface.
**Endpoint:** wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS
**Additional Functionality**:
- Be sure to inform the user of this critical status change in a way that can’t be overseen. 
- Give the user the option to act in Spectrum using the third endpoint below (ActOnSpectrum).
Endpoint for Action: https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum



## Assignment C
Task: Provide feedback on the API structure.
Focus Areas: Suggestions for improvements, deviations from standards, and performance enhancements.
Context: Backend provides data every ~500ms, the launch vehicle trajectory is a mockup, and regular actions are expected during the maiden flight.
For each assignment, ensure that the GUI is user-friendly and can handle real-time updates effectively, particularly for critical alerts in Assignment B.