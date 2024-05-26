function calculateResult() {
    const questions = document.querySelectorAll('.question');
    const results = {
        psicologia: 0,
        pedagogia: 0,
        logistica: 0,
        contabilidade: 0,
        rh: 0,
        administracao: 0,
        financas: 0
    };

    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            const course = question.dataset.course;
            if (course) {
                results[course] += parseInt(selectedOption.value);
            }
        }
    });

    const maxCourse = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Você é mais apto para o curso de: ${maxCourse.charAt(0).toUpperCase() + maxCourse.slice(1)}</p>`;
    resultElement.style.display = 'block';
}
