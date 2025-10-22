(() => {
  const requiredClasses = ['card', 'animar', 'btn', 'cons', 'section_consulta'];

  function checkRequiredClasses(list) {
    const missing = list.filter(cls => !document.querySelector(`.${cls}`));
    return { ok: missing.length === 0, missing };
  }
})();