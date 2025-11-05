import { useEffect, useState, useRef, useCallback } from "react";
import supabase from "../supabase/supabase-client";

const chatContainer = {
    marginTop: '5px',
    padding: '0px 3px',
    width: '100%',
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor: 'rgb(33, 37, 41)',
    overflowY: 'scroll',
    color: 'white'
};



export default function RealtimeChat({ data }) {
    const [messages, setMessages] = useState([]);
    const [loadingInitial, setLoadingInitial] = useState(false);
    const [error, setError] = useState('');
    const messageRef = useRef(null);

    const scrollSmoothToBottom = () => {
        if (messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    };

    const getInitialMessages = useCallback(async () => {
        setLoadingInitial(true);
        const { data: messages, error } = await supabase
            .from("messages")
            .select()
            .eq("game_id", data?.id);
        if (error) {
            setError(error.message);
            return;
        }
        setLoadingInitial(false);
        setMessages(messages);
    }, [data?.id]);

    useEffect(() => {
        if (data) {
            getInitialMessages();
            const channel = supabase
                .channel("messages")
                .on(
                    "postgres_changes",
                    { event: "*", schema: "public", table: "messages" },
                    () => getInitialMessages()
                )
                .subscribe();

            return () => {
                if (channel) {
                    supabase.removeChannel(channel);
                    channel.unsubscribe();
                }
            };
        }
    }, [data, getInitialMessages]);

    useEffect(() => {
        scrollSmoothToBottom();
    }, [messages]);

    return (
        <div style={chatContainer} ref={messageRef}>
            {loadingInitial && <progress></progress>}
            {error && <article>{error}</article>}
            {messages &&
                messages.map((message) => (
                    <div key={message.id} className="my-0 py-0 border">
                        <p className="d-inline-block me-2 fw-bold my-1">{message.profile_username}:</p>
                        <small className="d-inline-block">{message.content}</small>
                        {/* <p>{message.created_at}</p> */}
                    </div>
                ))}
        </div>
    );
}
