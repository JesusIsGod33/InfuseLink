exports.handler = async (event) => {
    const { data } = JSON.parse(event.body);
    const key = process.env.GEMINI_API_KEY;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: `Create a professional resume for this person: ${data}` }] }]
        })
    });

    const result = await response.json();
    const resumeText = result.candidates[0].content.parts[0].text;

    return {
        statusCode: 200,
        body: JSON.stringify({ resume: resumeText })
    };
};
