CREATE TABLE IF NOT EXISTS userchangelog (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    field_name VARCHAR(255) NOT NULL,
    last_value TEXT,
    current_value TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_userchangelog_user_id ON userchangelog(user_id);
CREATE INDEX idx_userchangelog_created_at ON userchangelog(created_at); 