# Tremia Web — instrucciones para Codex

Estas reglas aplican a todo el repositorio.

## 1. Contenido

- No inventar slogans, claims, cifras, clientes, certificaciones, servicios, proyectos, casos de éxito, industrias ni capacidades de Tremia.
- Usar únicamente contenido aprobado en `docs/content.md` o contenido que el usuario agregue explícitamente al repositorio.
- Si falta información, dejar un `TODO:` claro en código o documentación en vez de completar con texto inventado.
- No reemplazar términos técnicos de Tremia por copy genérico de marketing.
- Mantener el tono corporativo, técnico, claro y humano. Evitar frases que suenen generadas por IA.

## 2. Marca

- Respetar `docs/brand.md`.
- Mantener el logo y nombre Tremia sin modificaciones creativas.
- Priorizar la paleta oficial y las tipografías indicadas.
- El lenguaje visual debe ser tecnológico, industrial, moderno, profesional y sobrio.
- Evitar estética genérica de startup de IA, neones excesivos, glassmorphism gratuito, robots, cerebros, hologramas y efectos visuales sin función.
- Las animaciones deben ser sutiles y ayudar a jerarquía, lectura o navegación.

## 3. Diseño y UX

- Diseñar mobile-first y responsive.
- Mantener una jerarquía visual clara y buena legibilidad.
- Los CTA deben usar texto ya aprobado, por ejemplo `Hablemos`, cuando corresponda.
- No sacrificar accesibilidad por estética.
- Respetar contraste, foco de teclado, HTML semántico y textos alternativos.

## 4. Tecnología

Stack objetivo:

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Motion solo cuando aporte valor
- Vercel como destino de despliegue

Reglas:

- Evitar dependencias innecesarias.
- Crear componentes reutilizables cuando tenga sentido.
- Mantener el código simple y fácil de modificar.
- No introducir CMS, base de datos ni backend hasta que exista una necesidad real.
- No agregar funcionalidades no solicitadas.

## 5. Calidad

Antes de dar por terminado un cambio relevante:

1. Revisar TypeScript.
2. Ejecutar lint.
3. Ejecutar build cuando sea posible.
4. Revisar responsive en anchos mobile y desktop.
5. Verificar que no se haya inventado contenido comercial.

## 6. Prioridad de fuentes

Para decisiones de contenido, usar este orden:

1. `docs/content.md`
2. Material original incorporado al repositorio por el usuario
3. `docs/site-structure.md`
4. `docs/brand.md`

Si dos fuentes entran en conflicto, no asumir cuál es correcta: marcarlo como pendiente de validación.
