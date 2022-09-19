import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Mails({ emails, setEmails }) {
  const readEmail = (id) => {
    const updatedMessage = emails.map((email) => {
      if(email.id === id) {
        return { ...email, status: 1 }
      } else {
        return {...email};
      }
    })
    setEmails(updatedMessage)
  };

  const unreadEmail = (id) => {
    const updatedMessage = emails.map((email) => {
      if(email.id === id) {
        return { ...email, status: 0 }
      } else {
        return {...email};
      }
    })
    setEmails(updatedMessage)
  };

  const isRead = () =>  emails.every(({status}) => status === 1);
  

  useEffect(() => {
    if(isRead()) alert("Parabens, você leu todas as mensagens");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emails]);

  const markAllAsRead = () => {
    const allAsRead = emails.map(email => ({ ...email, status: 1}));
    setEmails(allAsRead);
  };
  const markAllAsUnread = () => {
    const allAsRead = emails.map(email => ({ ...email, status: 0}));
    setEmails(allAsRead);
  };

  return (
    <div>
      <button onClick={markAllAsRead} >Marcar todas como lidas</button>
      <button onClick={markAllAsUnread} >Marcar todas como não lidas</button>
      <div>
        <ul>
          {emails.map((email) => {
            return(
              <li
                key={email.id}
                className={email.status === 0 ? 'unread' : 'read'}
              >
                {email.title}
                <button key={`read${email.id}`} onClick={() => readEmail(email.id)}>Lido</button>
                <button key={`unread${email.id}`} onClick={() => unreadEmail(email.id)}>Não lido</button>
              </li>
            )
          } )}

        </ul>
      </div>
    </div>
  )
}

Mails.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
};