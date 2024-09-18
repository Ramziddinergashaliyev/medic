import React from "react";
import { CgArrowBottomLeft } from "react-icons/cg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "./info.scss";

const Info = () => {
  return (
    <div className="info container">
      <h2 className="info__title">Часто задаваемые вопросы</h2>
      <div className="info__card">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="info__card__text"
            >
              Мочевой будильник реально помогает?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="info__card__text"
            >
              Какая гарантия на будильник?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="info__card__text"
              style={{ color: "green" }}
            >
              Терапия энурезным будильником безопасна?
            </AccordionSummary>
            <AccordionDetails>
              Терапия энурезным будильником абсолютно безопасна. Не имеет
              побочных эффектов и не вызывает аллергических реакций. В мочевом
              будильнике использованы минимальные, не представляющие опасности,
              значения напряжения и силы тока. Не используется радиочастотное
              излучение.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </div>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="info__card__text"
            >
              Где производятся будильники?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="info__card__text"
            >
              Будильник эффективен для всех?
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="info__card__text"
              style={{ color: "green" }}
            >
              Пример развёрнутой вкладки вопроса?
            </AccordionSummary>
            <AccordionDetails>
              Вкла́дка (англ. tab) — элемент графического интерфейса
              пользователя, который даёт возможность переключения в одном окне
              приложения между несколькими открытыми документами или
              предопределёнными наборами элементов интерфейса, когда их доступно
              несколько, а на выделенном для них пространстве окна можно
              показывать только один из них.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Info;
