/* CyberSafe — iconos SVG locales, menú móvil, páginas de amenazas y cuestionario.
   Sin dependencias; las respuestas se guardan únicamente en memoria hasta cerrar o recargar la página. */
'use strict';
const ICONS = {
  'shield-check':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  'arrow-right':'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  'arrow-left':'<path d="M19 12H5m6 6-6-6 6-6"/>',
  'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
  'book-open':'<path d="M12 7v14m0-14C9 4 4 4 2 5v14c2-1 7-1 10 2m0-14c3-3 8-3 10-2v14c-2-1-7-1-10 2"/>',
  'scan-line':'<path d="M4 8V5a1 1 0 0 1 1-1h3m8 0h3a1 1 0 0 1 1 1v3M4 16v3a1 1 0 0 0 1 1h3m8 0h3a1 1 0 0 0 1-1v-3M4 12h16"/>',
  'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
  'mail-warning':'<rect x="2" y="5" width="17" height="13" rx="2"/><path d="m3 7 7.5 6L18 7m4 2v5m0 4h.01"/>',
  'mail-check':'<rect x="2" y="5" width="18" height="14" rx="2"/><path d="m3 7 8 6 8-6m1 7 2 2"/>',
  'alert-triangle':'<path d="M10.3 3.8 1.9 18.2a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v5m0 3h.01"/>',
  'key-round':'<circle cx="16" cy="8" r="5"/><path d="M11.8 11.8 3 20v2h4v-3h3v-3h3.2"/>',
  'clipboard-check':'<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-4"/>',
  'lock-keyhole':'<rect x="4" y="11" width="16" height="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4m-4 4v3"/>',
  'badge-check':'<path d="M12 2 15 4l3.5.4.5 3.5 2 3.1-2 3.1-.5 3.5-3.5.4-3 2-3-2-3.5-.4L5 14.1 3 11l2-3.1.5-3.5L9 4z"/><path d="m9 11 2 2 4-4"/>',
  'cloud-check':'<path d="M6 18a4 4 0 1 1 0-8h1a6 6 0 0 1 11.5-1.5A4.5 4.5 0 0 1 20 17h-2"/><path d="m9 18 2 2 5-5"/>',
  'bug':'<rect x="8" y="7" width="8" height="13" rx="4"/><path d="M12 7V4m-6 0 3 3m9-3-3 3M4 10h4m8 0h4M4 16h4m8 0h4m-16 4 4-3m12 0 4 3M9 11h6"/>',
  'file-lock-2':'<path d="M14 2H6a2 2 0 0 0-2 2v7m10-9 6 6v12a2 2 0 0 1-2 2h-6m2-20v6h6"/><rect x="2" y="16" width="10" height="7" rx="1"/><path d="M4 16v-2a3 3 0 0 1 6 0v2"/>',
  'contact-round':'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M6 19c0-4 2-6 6-6s6 2 6 6"/>',
  'messages-square':'<path d="M18 15v4a2 2 0 0 1-2 2h-1l-3-3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7"/><path d="M9 10h10a3 3 0 0 1 3 3v7l-3-3h-7a3 3 0 0 1-3-3v-4Z"/>',
  'hand':'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v6-3a1.5 1.5 0 0 1 3 0v6c0 5-3 8-8 8h-1c-2 0-4-1-5-3l-3-5a1.5 1.5 0 0 1 2.5-1.5L8 16"/>',
  'square-asterisk':'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 7v10m-4-8 8 6m0-6-8 6"/>',
  'smartphone':'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  'refresh-cw':'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9A7 7 0 0 1 18 6l2 1M4 17l2 1a7 7 0 0 0 12.4-3"/>',
  'hard-drive':'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 13h20m-4 3h.01M14 16h.01"/>',
  'eye-off':'<path d="M3 3 21 21M10.5 10.5a2 2 0 0 0 3 3"/><path d="M8.1 5.2A11 11 0 0 1 12 4c5 0 9 5 10 8a12 12 0 0 1-3 4.1M6 6A17 17 0 0 0 2 12c1 3 5 8 10 8 1.3 0 2.7-.3 3.9-.8"/>',
  'lightbulb':'<path d="M9 18h6m-5 3h4M8 15c-1-1-3-3-3-6a7 7 0 0 1 14 0c0 3-2 5-3 6l-1 2H9z"/>',
  'library-big':'<path d="M4 20V4h5v16H4Zm7 0V4h5v16h-5Zm6-16 4 15-4 1-4-15 4-1Z"/>',
  'external-link':'<path d="M12 5h7v7m0-7L9 15"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
  'graduation-cap':'<path d="m2 10 10-5 10 5-10 5-10-5Zm4 3v5c4 3 8 3 12 0v-5m4-3v7"/>',
  'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'x':'<path d="M5 5 19 19M19 5 5 19"/>',
  'house':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-8h6v8"/>',
  'check':'<path d="m4 12 5 5L20 6"/>',
  'check-circle-2':'<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  'circle-x':'<circle cx="12" cy="12" r="10"/><path d="m9 9 6 6m0-6-6 6"/>',
  'info':'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10h.01"/>',
  'award':'<circle cx="12" cy="8" r="6"/><path d="M8 13.5 7 22l5-3 5 3-1-8.5"/>',
  'rotate-ccw':'<path d="M3 12a9 9 0 1 0 3-6.7L3 8m0-5v5h5"/>'
};
function iconMarkup(name) {
  return `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${ICONS[name] || ICONS['shield-check']}</svg></span>`;
}
function hydrateIcons(root=document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    const name = el.dataset.icon;
    el.classList.add('icon');
    el.setAttribute('aria-hidden','true');
    el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" focusable="false">${ICONS[name] || ICONS['shield-check']}</svg>`;
  });
}

const THREATS = {
  phishing: {
    title:'Phishing', icon:'mail-warning',
    description:'Es un engaño por correo, SMS o mensajería. Quien lo envía suplanta a una entidad o persona para que abras un enlace, entregues datos o descargues un archivo.',
    alerts:['Te presionan con una amenaza o un premio inesperado.','El remitente o el dominio no coinciden con el oficial.','Te piden contraseñas, códigos o datos de pago.'],
    prevent:['Entra en la web o app oficial por tu cuenta; no uses el enlace del mensaje.','Confirma la solicitud por un canal que ya conozcas.','No compartas contraseñas ni códigos de verificación.'],
    example:'Recibes un SMS: “Tu paquete está retenido. Paga una tasa aquí”. El enlace lleva a una página que imita a la empresa de reparto y solicita tu tarjeta.',
    recovery:'Si entregaste datos, cambia la contraseña desde la web oficial y avisa a tu banco si compartiste datos de pago.'
  },
  malware: {
    title:'Malware', icon:'bug',
    description:'Malware significa software malicioso. Puede llegar en una descarga, un archivo adjunto o una aplicación y actuar sin tu permiso para espiar, robar datos o dañar el dispositivo.',
    alerts:['Aparecen aplicaciones o ventanas que no reconoces.','El equipo cambia de comportamiento sin una causa clara.','Una descarga te exige desactivar la protección del dispositivo.'],
    prevent:['Descarga aplicaciones de tiendas o sitios oficiales.','Mantén actualizado el sistema y sus herramientas de protección.','No abras adjuntos inesperados, aunque parezcan venir de un contacto.'],
    example:'Descargas una supuesta versión gratuita de un programa de pago. Al instalarla, también se instala un programa que registra lo que escribes.',
    recovery:'Si sospechas una infección, desconecta el equipo de la red y usa una herramienta de seguridad actualizada. Pide ayuda técnica antes de volver a usar cuentas sensibles.'
  },
  ransomware: {
    title:'Ransomware', icon:'file-lock-2',
    description:'Es un programa malicioso que puede cifrar archivos o bloquear un dispositivo. Los atacantes exigen un rescate y a veces amenazan con publicar datos robados. Pagar no garantiza recuperarlos.',
    alerts:['Tus archivos ya no se abren y tienen extensiones extrañas.','Aparece una nota de rescate que pide dinero.','Se amenaza con borrar o publicar tu información.'],
    prevent:['Haz copias de seguridad y mantén una copia desconectada o protegida.','Actualiza el sistema y las aplicaciones para corregir fallos.','Desconfía de adjuntos inesperados y verifica su origen.'],
    example:'Abres un adjunto que parece una factura. Después, tus documentos quedan bloqueados y aparece un mensaje que exige dinero para devolverte el acceso.',
    recovery:'Desconecta el dispositivo de la red, no conectes tus copias y pide ayuda especializada. Conserva el mensaje como evidencia y denuncia por los canales de tu país.'
  },
  identidad: {
    title:'Robo de identidad', icon:'contact-round',
    description:'Ocurre cuando alguien usa tus datos personales para suplantarte. Puede abrir cuentas, solicitar servicios o contactar con otras personas en tu nombre.',
    alerts:['Recibes avisos de cuentas o compras que no reconoces.','Aparecen cambios de contraseña que no has solicitado.','Tus contactos reciben mensajes que no enviaste.'],
    prevent:['Comparte solo los datos necesarios y limita su visibilidad en redes.','Activa la autenticación multifactor y revisa las sesiones de tus cuentas.','Verifica quién solicita tu documento y para qué lo necesita.'],
    example:'Alguien usa una foto de tu documento y otros datos publicados en redes para crear una cuenta a tu nombre y pedir dinero a tus contactos.',
    recovery:'Contacta con el servicio afectado, recupera tus cuentas y avisa a tus contactos. Guarda pruebas y denuncia la suplantación ante las autoridades correspondientes.'
  },
  ingenieria: {
    title:'Ingeniería social', icon:'messages-square',
    description:'Es una forma de engaño que aprovecha la confianza, la urgencia o el miedo. Puede ocurrir por teléfono, en persona o por internet. El phishing es uno de sus ejemplos.',
    alerts:['Alguien exige actuar ya y mantener la petición en secreto.','Dice ser una autoridad, un familiar o el soporte técnico.','Te pide acceso remoto, dinero o códigos de seguridad.'],
    prevent:['Haz una pausa: una petición urgente también puede esperar a una verificación.','Cuelga y contacta por el número oficial que ya conoces.','No entregues códigos ni permitas acceso remoto a desconocidos.'],
    example:'Una persona llama diciendo que es del soporte de tu universidad. Afirma que tu cuenta está en riesgo y te pide el código que acaba de llegar a tu móvil.',
    recovery:'Si diste acceso, finaliza la conexión y avisa al soporte real. Cambia las credenciales desde un dispositivo de confianza y revisa la actividad de tu cuenta.'
  }
};
function initThreatPage() {
  const params=new URLSearchParams(window.location.search);
  const type=params.get('tipo');
  const t=THREATS[type]||THREATS.phishing;
  document.title=`${t.title} | CyberSafe`;
  document.getElementById('breadcrumb-label').textContent=t.title;
  document.getElementById('detail-icon').dataset.icon=t.icon;
  document.getElementById('detail-title').textContent=t.title;
  document.getElementById('detail-description').textContent=t.description;
  document.getElementById('detail-example').textContent=t.example;
  document.getElementById('detail-recovery').textContent=t.recovery;
  document.getElementById('alert-list').innerHTML=t.alerts.map(s=>`<li>${iconMarkup('alert-triangle')}<span>${s}</span></li>`).join('');
  document.getElementById('prevent-list').innerHTML=t.prevent.map(s=>`<li>${iconMarkup('check')}<span>${s}</span></li>`).join('');
}

const QUESTIONS = [
  {
    topic:'Mensajes sospechosos', title:'Un SMS dice que tu cuenta bancaria se bloqueará y te pide entrar en un enlace. ¿Qué haces?',
    answers:['Abro el enlace y escribo mis datos para evitar el bloqueo.','Entro en la app oficial o contacto con mi banco por un canal conocido.','Respondo al SMS con mi contraseña para confirmar mi identidad.'], correct:1,
    explanation:'La urgencia y la petición de datos pueden ser señales de phishing. Verifica el aviso desde la app oficial o un teléfono conocido, sin usar el enlace del mensaje.',
    summary:'Verifica por un canal independiente.'
  },
  {
    topic:'Contraseñas', title:'¿Qué práctica protege mejor tus cuentas?',
    answers:['Usar la misma contraseña compleja en todas las cuentas.','Usar el nombre de mi mascota y mi año de nacimiento.','Crear una contraseña larga y única para cada cuenta y guardarla en un gestor.'], correct:2,
    explanation:'Una contraseña única evita que una filtración ponga en riesgo todas tus cuentas. Un gestor de confianza ayuda a crear y guardar contraseñas largas sin tener que memorizarlas.',
    summary:'Una cuenta, una contraseña distinta.'
  },
  {
    topic:'Autenticación multifactor', title:'¿Qué aporta la autenticación multifactor a una cuenta?',
    answers:['Añade otra prueba de identidad además de la contraseña.','Sustituye las actualizaciones del dispositivo.','Permite compartir la contraseña con menos riesgo.'], correct:0,
    explanation:'Añade una prueba adicional, como una app de autenticación o una llave de seguridad. Dificulta el acceso si alguien roba tu contraseña, pero no hace seguro compartirla ni reemplaza otros cuidados.',
    summary:'Activa un segundo factor y no compartas códigos.'
  },
  {
    topic:'Actualizaciones', title:'Tu móvil tiene una actualización del sistema pendiente. ¿Qué es lo más recomendable?',
    answers:['Ignorarla si el móvil todavía funciona.','Instalarla desde los ajustes oficiales y mantener las actualizaciones automáticas.','Buscar una copia en un enlace que te envió una persona desconocida.'], correct:1,
    explanation:'Las actualizaciones pueden corregir fallos de seguridad que ya se conocen. Usa los ajustes o canales oficiales del dispositivo y mantén también actualizadas tus aplicaciones.',
    summary:'Actualizar también es proteger.'
  },
  {
    topic:'Copias de seguridad', title:'¿Qué te ayuda a recuperar un trabajo si un ransomware bloquea tu portátil?',
    answers:['Una copia en la misma carpeta que el archivo original.','Pagar el rescate para asegurarte de recuperar el archivo.','Una copia de seguridad separada, protegida y con restauración comprobada.'], correct:2,
    explanation:'Una copia separada y protegida reduce el riesgo de perder también el respaldo. Comprueba que puedes restaurarla y mantén una copia desconectada o con protección frente a cambios. Pagar no garantiza recuperar los datos.',
    summary:'Haz copias y prueba la recuperación.'
  }
];
function escapeHtml(s) {
  return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
}
function initQuiz() {
  let index=0;
  const choices=Array(QUESTIONS.length).fill(null);
  const content=document.getElementById('quiz-content');
  const pageTitle=document.getElementById('quiz-page-title');
  const intro=document.getElementById('quiz-intro');
  const footnote=document.getElementById('quiz-footnote');
  const correctAt=i=>choices[i]===QUESTIONS[i].correct;
  const scrollTop=()=>window.scrollTo({top:0,behavior:'auto'});

  function renderQuestion(){
    pageTitle.textContent='Cuestionario educativo';
    intro.textContent='Una respuesta por pregunta. Recibirás una explicación para aprender, aciertes o no.';
    const q=QUESTIONS[index];
    const answered=choices[index]!==null;
    const isRight=correctAt(index);
    content.innerHTML=`
      <div class="progress-heading"><span>Pregunta ${index+1} de ${QUESTIONS.length}</span><span>${escapeHtml(q.topic)}</span></div>
      <div class="progress-track" aria-label="Progreso: pregunta ${index+1} de ${QUESTIONS.length}">${QUESTIONS.map((_,i)=>`<span class="${i<=index?'filled':''}"></span>`).join('')}</div>
      <section class="question-card" aria-labelledby="question-title"><h2 id="question-title">${escapeHtml(q.title)}</h2>
      <p class="answer-status">${answered?'Respuesta registrada · Estado de retroalimentación':'Selecciona una opción · Ninguna respuesta seleccionada'}</p>
      <div class="answer-options" role="group" aria-label="Selecciona una respuesta">
       ${q.answers.map((a,i)=>{
         const correct=answered&&i===q.correct;
         const incorrect=answered&&i===choices[index]&&i!==q.correct;
         const css=correct?' correct':(incorrect?' incorrect':'');
         const label=correct?(i===choices[index]?'Tu respuesta · Correcta':'Respuesta correcta'):(incorrect?'Tu respuesta · Para repasar':'');
         const marker=(correct?iconMarkup('check-circle-2'):(incorrect?iconMarkup('circle-x'):''));
         return `<button class="answer-option${css}" type="button" data-answer="${i}" aria-pressed="${answered&&i===choices[index]?'true':'false'}" ${answered?'disabled':''}><span class="answer-marker">${marker}</span><span class="answer-copy"><span class="${correct||incorrect?'answer-emph':''}">${escapeHtml(a)}</span>${label?`<small>${escapeHtml(label)}</small>`:''}</span></button>`;
       }).join('')}
      </div>${!answered?'<p class="option-note">El foco de teclado es visible en las opciones. El foco no indica una selección.</p>':''}</section>
      ${answered?`<div class="feedback-box ${isRight?'success':'error'}" role="status"><div class="feedback-title">${iconMarkup(isRight?'check-circle-2':'lightbulb')}<span>${isRight?'¡Correcto! Entendamos por qué.':'No es la respuesta correcta. Repasemos.'}</span></div><p>${escapeHtml(q.explanation)}</p></div>
      <button class="btn btn-primary quiz-next" id="next-question" type="button">${index===QUESTIONS.length-1?'Ver resultado':'Siguiente pregunta'} ${iconMarkup('arrow-right')}</button>`:
      `<div class="quiz-notice">${iconMarkup('info')}<span>Al elegir una opción, la vista de respuesta muestra la explicación antes de continuar.</span></div>`}`;
    footnote.textContent=answered?'Vista educativa · Respuesta y explicación · No registra respuestas ni datos personales.':'Vista educativa · Estado inicial · No registra respuestas ni datos personales.';
    content.querySelectorAll('[data-answer]').forEach(button=>{
      button.addEventListener('click',()=>{
        if(choices[index]!==null)return;
        choices[index]=Number(button.dataset.answer);
        renderQuestion();
      });
    });
    content.querySelector('#next-question')?.addEventListener('click',()=>{
      if(index<QUESTIONS.length-1){index++;renderQuestion();}else renderResults();
      scrollTop();
    });
  }
  function renderResults(){
    pageTitle.textContent='Tu resultado';
    intro.textContent='Cada respuesta es una oportunidad para mejorar tus hábitos.';
    const score=QUESTIONS.reduce((total,_,i)=>total+(correctAt(i)?1:0),0);
    let title,sub;
    if(score===5){title='¡Excelente! Sigue cuidando tus datos.';sub='Has reconocido las cinco prácticas esenciales. Mantén estos hábitos también fuera del cuestionario.';}
    else if(score>=3){title='¡Una buena base para seguir aprendiendo!';sub='Has reconocido varios hábitos importantes. Revisa las respuestas para repasar lo que aún puedes fortalecer.';}
    else {title='¡Cada paso cuenta para aprender!';sub='Repasa los temas y vuelve a intentarlo. Un pequeño hábito nuevo puede ayudar a proteger mejor tus datos.';}
    content.innerHTML=`
      <div class="result-hero"><div class="result-score">${iconMarkup('award')}<strong>${score} de 5</strong><small>respuestas correctas</small></div><div><h2>${title}</h2><p>${sub}</p></div></div>
      <h2 class="result-list-title">Lo que te llevas</h2>
      <ol class="result-list">${QUESTIONS.map((q,i)=>`<li class="${correctAt(i)?'':'needs-review'}">${iconMarkup(correctAt(i)?'check-circle-2':'rotate-ccw')}<div><strong>${i+1}. ${escapeHtml(q.topic)} · ${correctAt(i)?'Correcta':'Para repasar'}</strong><small>${escapeHtml(q.summary)}</small></div></li>`).join('')}</ol>
      <div class="result-actions"><a href="index.html#protegerte" class="btn btn-primary">Repasar cómo protegerte ${iconMarkup('arrow-right')}</a><button type="button" class="btn btn-outline" id="quiz-restart">Reiniciar cuestionario ${iconMarkup('arrow-right')}</button></div>
      <p class="result-note">Este resultado es educativo, no una certificación ni una garantía de seguridad.</p>`;
    footnote.textContent='Vista educativa · Resultado final · No registra respuestas ni datos personales.';
    content.querySelector('#quiz-restart').addEventListener('click',()=>{
      index=0;choices.fill(null);renderQuestion();scrollTop();
    });
  }
  renderQuestion();
}
function initMobileNav(){
  const drawer=document.getElementById('mobile-menu');
  const overlay=document.querySelector('.mobile-overlay');
  const opener=document.querySelector('.menu-toggle');
  const closer=document.querySelector('.mobile-close');
  if(!drawer||!overlay||!opener||!closer)return;
  const links=drawer.querySelectorAll('a');
  let lastFocus=null;
  function toggle(open){
    if(open)lastFocus=document.activeElement;
    drawer.classList.toggle('is-open',open);
    drawer.setAttribute('aria-hidden',String(!open));
    overlay.hidden=!open;
    document.body.classList.toggle('menu-open',open);
    opener.setAttribute('aria-expanded',String(open));
    opener.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
    if(open){closer.focus();}else if(lastFocus){lastFocus.focus();}
  }
  opener.addEventListener('click',()=>toggle(!drawer.classList.contains('is-open')));
  closer.addEventListener('click',()=>toggle(false));
  overlay.addEventListener('click',()=>toggle(false));
  links.forEach(a=>a.addEventListener('click',()=>toggle(false)));
  document.addEventListener('keydown',event=>{
    if(!drawer.classList.contains('is-open'))return;
    if(event.key==='Escape'){toggle(false);return;}
    if(event.key==='Tab'){
      const focusable=[closer,...Array.from(links)];
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  const page=document.body.dataset.page;
  const current=page==='detail'?'amenazas':page==='quiz'?'cuestionario':(location.hash.slice(1)||'inicio');
  drawer.querySelectorAll('[data-nav]').forEach(link=>{
    if(link.dataset.nav===current){link.classList.add('is-current');link.setAttribute('aria-current','page');}
  });
}
function init(){
  if(document.body.dataset.page==='detail')initThreatPage();
  if(document.body.dataset.page==='quiz')initQuiz();
  hydrateIcons();
  initMobileNav();
}
document.addEventListener('DOMContentLoaded',init);
