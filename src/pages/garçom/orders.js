import React, { useState } from 'react';
import { db, auth } from '../../../util/firebaseConfig';


const ResumeArea = ({ resume, onDelete, setState }) => {
  const [client, setClient] = useState({ name: '', table: '' });

  const handleSubmit = () => {
    if (client.name === '' || client.table === '' || resume.length === 0) {
      alert(
       'Pedido inválido, preencha todos os campos!'
      );
    } else {
      notification({
        title: 'Aguarde',
        message: 'Pedido sendo enviado.',
        type: 'info'
      });

      if (!navigator.onLine) {
        notification({
          title: 'Sem conexão de internet.',
          message: 'Seu pedido será salvo localmente no momento.',
          type: 'warning'
        });
      }

      db.collection('kitchen')
        .add({
          atendent: auth.currentUser.displayName,
          client: {
            name: client.name,
            table: client.table
          },
          order: resume,
          time: new Date().getTime(),
          location: 'kitchen'
        })
        .then(() => {
          notification({
            title: 'Pedido enviado com sucesso!',
            message: 'Obrigada!',
            type: 'success'
          });
          setClient({ name: '', table: '' });
          setState([]);
        })
        .catch((error) => {
          notification({
            title: 'Falha no envio',
            message: error,
            type: 'danger'
          });
        });
    }
  };

  return (
    <aside className={css(styles.container)}>
      <Subtitle style={css(styles.title)}>Resumo do Pedido</Subtitle>
      <Input
        id='clientName'
        value={client.name}
        placeholder='Nome do Cliente'
        type='text'
        style={{
          container: css(styles.InputContainer),
          input: css(styles.input),
          label: css(styles.label)
        }}
        onChange={(e) => {
          setClient((state) => ({ ...state, name: e.target.value }));
          e.persist();
        }}
      >
        Nome:
      </Input>
      <Input
        id='clientTable'
        value={client.table}
        placeholder='00'
        type='text'
        style={{
          container: css(styles.InputContainer),
          input: css(styles.input),
          label: css(styles.label)
        }}
        onChange={(e) => {
          setClient((state) => ({ ...state, table: e.target.value }));
          e.persist();
        }}
      >
        Mesa:
      </Input>
      <List
        resume={resume}
        onDelete={onDelete}
      />
      <Button
        style={css(styles.button)}
        onClick={handleSubmit}
      >
        Enviar para a cozinha
      </Button>
    </aside>
  );
};

ResumeArea.propTypes = {
  resume: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
};



export default ResumeArea;